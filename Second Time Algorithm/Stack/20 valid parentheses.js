var isVaild = function(s) {
    let stack = [];

    const map = {
        ")" : "(",
        "]" : "[",
        "{" : "}"
    }

    for(let char of s) {
        if(Object.values(map).includes(char)) {
            stack.push(char);
        } else if(map.hasOwnProperty(char)) {
            if(stack.length === 0 || stack.pop !== map[char]) {
                return false;
            }
        }
    }
    return true;
}