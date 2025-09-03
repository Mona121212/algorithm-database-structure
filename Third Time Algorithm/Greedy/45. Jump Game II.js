var  jump = function(nums) {

    let currentIndex = 0;
    let nextIndex = 0;
    let step = 0;

    if(nums.length === 1) return 0;

    for(let i = 0; i < nums.length - 1; i++) {
        nextIndex = Math.max(nextIndex, i + nums[i]);

        if(i === currentIndex) {
            currentIndex = nextIndex;
            step++;
        }
    }
}