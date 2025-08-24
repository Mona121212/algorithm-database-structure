var searchRange = function(nums, target) {
    function findLeft(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            // point will move to the first location is left
            if(target > nums[mid]) {
                left = mid + 1;
            } else {
                if(nums[mid] === target) index = mid;
                right = mid - 1;
            }
        }
        return index;
    }

    function findRight(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;

        while(left <= right) {
            let mid = Math.floor((left + right) / 2);
            // point will move to the first location is right;
            if(target < nums[mid]) {
                right = mid - 1;
            } else {
                if(nums[mid] === target) index = mid
                left = mid + 1;
            }
        }
        return index;
    }

    const start = findLeft(nums, target);
    const end = findRight(nums, target);
    return [start, end];
}