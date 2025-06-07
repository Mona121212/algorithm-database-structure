/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1,2,3,1]
var findPeakElement = function(nums) {
    let left = 0; let right = nums.length -1;
    while(left < right) {
        let mid = Math.floor((right + left) / 2);
        if(nums[mid] > nums[mid + 1]) {
            right = mid
        } else {
            left = mid + 1;
        }
        
    }
    return left;
    
    
};
var a = findPeakElement(nums);
console.log(a)