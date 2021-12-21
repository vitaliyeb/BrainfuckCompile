
export default class Compile {
    memorySet: Int8Array;
    code: string;
    memoryIndex: number;
    codeIndex: number;


    constructor(code: string) {
        this.memorySet = new Int8Array(30000);
        this.code = code.replace(/\s/g, '');
        this.memoryIndex = 0;
        this.codeIndex = 0;
    }

    run = () => {
        while (this.codeIndex < this.code.length) {
            this.callOperator(this.code[this.codeIndex]);
            this.codeIndex++;
        }
    }

    callOperator = (op: string) => {
        console.log('op', op);
        const {
            memoryIndex,
            memorySet
        } = this;

        switch (op) {
            case '>':
                this.memoryIndex++;
                break;
            case '<':
                this.memoryIndex--;
                break;
            case '+':
                memorySet[memoryIndex]++;
                break;
            case '-':
                memorySet[memoryIndex]--;
                break;
            case '.':
                console.log(memorySet[memoryIndex]);
                break;
            case ',':
                return ''
            case '[':
                this.nestingGroup();
                break;
            case ']':
                return ''
        }
    }

    nestingGroup = () => {
        const {
            code,
            memoryIndex,
            codeIndex,
            memorySet
        } = this;
        const lvl = 1;
        if(memorySet[memoryIndex] === 0){
            while(lvl) {
                
            }
        }
    }
}