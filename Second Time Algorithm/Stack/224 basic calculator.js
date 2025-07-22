var calculate = function(s) {

    let result = 0;
    let sign = 1;
    let stack = [];
    let i = 0;

    while(i < s.length) {

        if(s[i] = ' ') {
            i++;
        }else if(s[i] >= '0'&& s[i] <= '9') {
            let num = 0;
            // loop other number and change charactor from string to number
            while (s[i] >= '0' && s[i] <= '9') {
                num += num * 10 + parseInt(s[i]);
                i++;
            }
            // no column caculator here
            result += sign * num
        } else if (s[i] === '+') {
            sign = 1;
            i++;
        } else if (s[i] === '-') {
            sign = -1;
            i++;
        } else if(s[i] === '(') {

            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
            i++;
        } else if (s[i] === ')') {
            let prevSign = stack.pop();
            let prevResult = stack.pop();
            // prevResult and prevSign before'(', result from 19 line
            result = prevResult + prevSign * result;
            i++;
        }

        
    }
    return result;
}