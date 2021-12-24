export type Interpret = (str: string) => {result: string; error: null | string; ms: number};


const interpret: Interpret = (c) =>  {
    const memorySet = new Int8Array(30000);
    const code = c.replace(/\s/g, '');
    let pointer = 0;
    let index = 0;
    let result = '';
    let error = null;


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
                break;
            case ']':
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
                }
                break;
            default:
                error = `Uncaught SyntaxError: Unexpected token '${token}'`;
                break mainLoop;
        }
        index++;
    }

    return {
        result,
        error,
        ms: 0
    };
};

export default interpret;