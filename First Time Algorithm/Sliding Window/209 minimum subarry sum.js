
var minSubArrayLen = function(target, nums) {
    let minLen = Infinity;
    let left = 0;
    let curSum = 0;

    for (let right = 0; right < nums.length; right++) {
        curSum += nums[right];

        while (curSum >= target) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
            }
            curSum -= nums[left];
            left++;
        }
    }

    return minLen !== Infinity ? minLen : 0;
};

function runTests() {
    const tests = [
        { target: 7, nums: [2,3,1,2,4,3], expected: 2 }, // [4,3]
        { target: 4, nums: [1,4,4], expected: 1 },
        { target: 11, nums: [1,1,1,1,1,1,1,1], expected: 0 },
        { target: 15, nums: [1,2,3,4,5], expected: 5 },
        { target: 11, nums: [1,2,3,4,5], expected: 3 }, // [3,4,5]
        { target: 3, nums: [1,1], expected: 0 },
    ];

    tests.forEach(({ target, nums, expected }, index) => {
        const result = minSubArrayLen(target, nums);
        const pass = result === expected ? "✅ PASS" : `❌ FAIL (Got ${result})`;
        console.log(`Test ${index + 1}: target = ${target}, nums = [${nums}] → Expected: ${expected} → ${pass}`);
    });
}


runTests();
