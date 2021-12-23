type Interpret = (str: string) => {result: string; error: null; ms: number};


const interpret: Interpret = (c) =>  {
    const memorySet = new Int8Array(30000);
    const code = c.replace(/\s/g, '');
    let pointer = 0;
    let index = 0;
    let result = '';
    let error = null;

    while (index < code.length) {
        const operator = code[index];

        switch (operator) {
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
                    }
                }
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