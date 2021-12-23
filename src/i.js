
(() => {
    function getResult(arr, w) {
        let calls = Math.max(...arr);
        const clone = arr.slice(0);
        const isTruthy = (arr) => arr.reduce((acc, i) => i + acc, 0) <= w;

        if(isTruthy(arr)) return true;

        const desc = clone.sort((a, b) => a <= b ? 1 : -1);

        for (let i = 0; i <= calls; i++){
            desc[i] = desc[i] / 2;
            if (isTruthy(desc)) return true;
        }
        return false;

    }
    console.log(getResult([3, 2, 4, 5, 200], 9));
})()