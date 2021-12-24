import {log} from "util";

export type Interpret = (str: string) => {result: string; error: null | string; ms: number};


const interpret: Interpret = (c) =>  {
    const memorySet = new Int8Array(30000);
    const code = c.replace(/\s/g, '');
    let pointer = 0;
    let index = 0;
    let result = '';
    let error = null;
    const cycleСounter: number[] = [];

    mainLoop: while (index < code.length) {
        const token = code[index];

        switch (token) {
            case '>':
                pointer++;
                break;
            case '<':
                pointer--;
                break;
            case '+':
                memorySet[pointer]++;
                break;
            case '-':
                memorySet[pointer]--;
                break;
            case '.':
                // result+=String.fromCharCode(memorySet[pointer]);
                result+=memorySet[pointer];
                break;
            case ',':
                break;
            case '[':
                if(!memorySet[pointer]){
                    let nesting = 1;
                    while(nesting) {
                        index++;
                        if (code[index] === '[') nesting++;
                        if (code[index] === ']') nesting--;
                        if(index > code.length) {
                            error = `Uncaught SyntaxError: expected closing token ']'`;
                            break mainLoop;
                        };
                    }
                }
                cycleСounter.push(0);
                break;
            case ']':
                if (++cycleСounter[cycleСounter.length-1] >= 1000) {
                    error = `InternalError: infinity loop`;
                    break mainLoop;
                }
                if(memorySet[pointer]){
                    let nesting = 1;
                    while(nesting) {
                        index--;
                        if (code[index] === '[') nesting--;
                        if (code[index] === ']') nesting++;
                        if(index < 0) {
                            error = `Uncaught SyntaxError: expected closing token '['`;
                            break mainLoop;
                        };
                    }
                    break;
                }
                cycleСounter.pop();
                break;
            default:
                error = `Uncaught SyntaxError: Unexpected token '${token}'`;
                break mainLoop;
        }

        index++;
    }
    // console.log(result);
    return {
        result,
        error,
        ms: 0
    };
};

export default interpret;