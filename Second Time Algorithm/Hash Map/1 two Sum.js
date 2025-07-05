var twoSum = function(nums, target) {
    let twoSumMap = {};
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        const complement = target - nums[i];

        if(twoSumMap.hasOwnProperty(complement)) {
            return [ twoSumMap[complement], i]
        }
        twoSumMap(nums[i]) = i;
    }
}