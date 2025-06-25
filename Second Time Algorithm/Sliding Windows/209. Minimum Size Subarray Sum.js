var minSubArrayLen = function(target, nums) {
    let left = 0 ;
    let subArraySum = 0;
    let minLength = Infinity;

    for(let right = 0; right < nums.length; right++) {
        subArraySum += nums[right];
        while(subArraySum >= target) {
            if(right - left + 1 < minLength) {
                minLength = right - left + 1;
            }
            subArraySum -= nums[left];
            left++;
        }
    }
    return minLenght !== Infinity ? minLength : 0;
}