export default function (c: string) {
    const memorySet = new Int8Array(30000);
    const code = c.replace(/\s/g, '');
    let pointer = 0;
    let index = 0;

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
                console.log(memorySet[pointer]);
                break;
            case ',':
                return ''
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
}