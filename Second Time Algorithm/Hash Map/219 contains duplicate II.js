var containsNearByDuplicate = function(nums, k) {
    const seen = new Map();

    for(let i = 0; i < nums.length; i++) {
        const val = nums[i];
        //seen.has(val) means nums[i] = nums[j]
        // seen.get(val) = j;

        if(seen.has(val) && i - seen.get(val) <= k) {
            return true;
        }

        seen.set(val, i);
    }
    return false;
}