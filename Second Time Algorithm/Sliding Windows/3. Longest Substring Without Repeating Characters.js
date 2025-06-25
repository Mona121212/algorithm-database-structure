var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLength = 0;
    let char = new Set();
    for(let right = 0; right < s.length; right++) {
        // need to traverse
        while(char.has(nums[right])){
            char.delete(nums[left]);
            left++;
        }

        char.add(nums[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
}