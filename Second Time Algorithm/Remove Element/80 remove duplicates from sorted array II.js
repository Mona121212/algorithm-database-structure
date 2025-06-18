nums = [1, 2, 3, 4, 5, 6]
var removeDuplicates = function(nums) {

    // let i = nums.length-1;
    if(nums.length <= 2) return nums.length;
    let k = 2;
    for(let i = 2; i<=nums.length-1; i++){
        if(nums[i]!==nums[k-2]){
            nums[k]=nums[i];
            k++;
        }
    }
    return k
};

var a = removeDuplicates(nums);
console.log(a);