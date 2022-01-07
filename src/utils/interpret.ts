export type Interpret = (str: string, p: string) => {result: number[]; error: null | string; ms: number};

const interpret: Interpret = (c, p) =>  {
    const params = p.split(',').map(i => (parseInt(i) || 0));
    const memorySet = new Int8Array(30000);
    const code = c.replace(/\s/g, '');
    let pointer = 0;
    let index = 0;
    let result: number[] = [];
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
                result.push(memorySet[pointer]);
                break;
            case ',':
                const n = params.shift();
                if(typeof n !== "undefined"){
                    memorySet[pointer] = n;
                }
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

    if(cycleСounter.length && error !== `InternalError: infinity loop`) error = `Uncaught SyntaxError: expected closing token ']'`;

    return {
        result,
        error,
        ms: 0
    };
};

export default interpret;