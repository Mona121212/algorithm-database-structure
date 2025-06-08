s = "(1+(4+5+2)-3)+(6+8)"

function calculate(s) {
    let stack = [];             // Stack to store previous results and signs before parentheses
    let result = 0;             // Current calculation result
    let sign = 1;               // Current sign: 1 for positive, -1 for negative
    let i = 0;                  // Pointer to current position in the string

    while (i < s.length) {      // Loop through the entire expression
        const char = s[i];      // Current character

        if (char === ' ') {
            i++;                // Skip spaces
        } else if (char >= '0' && char <= '9') {
            // If it's a digit, parse the whole number
            let num = 0;
            while (i < s.length && s[i] >= '0' && s[i] <= '9') {
                num = num * 10 + parseInt(s[i]);  // Convert character to number, build multi-digit number
                i++;
            }
            result += sign * num; // Apply the sign and add to result
        } else if (char === '+') {
            sign = 1;            // Next number is positive
            i++;
        } else if (char === '-') {
            sign = -1;           // Next number is negative
            i++;
        } else if (char === '(') {
            // On encountering '(', begin a new sub-expression
            // Save current result and sign for later restoration
            stack.push(result);  // Save current result
            stack.push(sign);    // Save current sign
            result = 0;          // Reset result for new sub-expression
            sign = 1;            // Reset sign to positive
            i++;
        } else if (char === ')') {
            // On encountering ')', end current sub-expression
            const prevSign = stack.pop();     // Get the sign before the parenthesis
            const prevResult = stack.pop();   // Get the result before the parenthesis
            result = prevResult + prevSign * result; // Merge sub-expression result with previous context
            i++;
        }
    }

    return result; // Return the final result
}

var a= calculate(s);
console.log(a);