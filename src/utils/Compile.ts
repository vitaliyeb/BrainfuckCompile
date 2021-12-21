
export default class Compile {
    memorySet: Int8Array;
    code: string;
    index: number;


    constructor(code: string) {
        this.memorySet = new Int8Array(30000);
        this.code = code.replace(/\s/g, '');
        this.index = 0;
    }

    run = () => {
        let i = 0;
        while (i < this.code.length) {
            this.callOperator(this.code[i++])
        }
    }

    callOperator = (op: string) => {
        console.log('op', op);
        const {
            index,
            memorySet
        } = this;

        switch (op) {
            case '>':
                this.index++;
                break;
            case '<':
                this.index--;
                break;
            case '+':
                memorySet[index]++;
                break;
            case '-':
                memorySet[index]--;
                break;
            case '.':
                console.log(memorySet[index]);
                break;
            case ',':
                return ''
            case '[':
                return ''
            case ']':
                return ''
        }
    }

}