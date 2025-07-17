
var productExceptSelf = function(nums) {
    const n = nums.length;
    const answer = new Array(n).fill(1);
    let left = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = left;
        left *= nums[i];
    }

    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer;
};

// ✅ testing function
function testProductExceptSelf() {
    const testCases = [
        {
            input: [1, 2, 3, 4],
            expected: [24, 12, 8, 6]
        },
        {
            input: [2, 3, 4, 5],
            expected: [60, 40, 30, 24]
        },
        {
            input: [0, 1, 2, 3],
            expected: [6, 0, 0, 0]
        },
        {
            input: [1, 0, 3, 0],
            expected: [0, 0, 0, 0]
        },
        {
            input: [5],
            expected: [1]
        }
    ];

    testCases.forEach(({ input, expected }, index) => {
        const result = productExceptSelf(input);
        console.log(`Test Case ${index + 1}:`);
        console.log(`Input:    ${input}`);
        console.log(`Expected: ${expected}`);
        console.log(`Result:   ${result}`);
        console.log(`Passed:   ${JSON.stringify(result) === JSON.stringify(expected)}\n`);
    });
}

// ✅ run test
testProductExceptSelf();
