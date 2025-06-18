nums = [1, 2, 2, 3, 3, 6]

var removeDuplicates = function(nums) {

    if(nums.length <= 0) return nums.length;

    let k = 1;
    for(let i = 1; i <= nums.length; i++) {
        if(nums[i] !== nums [k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;

}