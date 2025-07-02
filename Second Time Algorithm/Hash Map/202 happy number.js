var isHappy = function(n) {
    const happyMap = new Set();

    while(n !== 1 && !happyMap.has(n)) {
        happyMap.add(n);
        const digits = n.toString().split('');
        let sum = 0
        for(let digit of digits) {
            sum += Math.pow(Number(digit), 2);
        }
        n = sum;
    }
    return n===1;
}