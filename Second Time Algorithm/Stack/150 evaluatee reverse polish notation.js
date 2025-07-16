var evalRPN = function(tokens) {
    let result;
    let stack = [];

    for(let token of tokens) {
        //trigger condition
        if(["+", "-", "/", "*"].includes(token)) {
            const b = stack.pop();
            const a = stack.pop();

            if(token === "+") result = a + b;
            else if(token === "-") result = a - b;
            else if(token === "*") result = a * b;
            else if(token === "/") result = Math.trunc(a/b);

            // after caculator 
            stack.push(result);
        } else {
            stack.push(parseInt(token));
        }

    }
    return result;
}