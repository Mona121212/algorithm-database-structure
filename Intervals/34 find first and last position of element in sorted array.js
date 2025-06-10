//let nums = new Array(), target;
nums = [5,7,7,8,8,10], target = 8
function searchRange(nums, target) {
    // Helper function to find the left (first) boundary of target
    function findLeft(nums, target) {
        let left = 0;                     // Start of the search range
        let right = nums.length - 1;      // End of the search range
        let index = -1;                   // Default index if target is not found

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);  // Middle index
            if (nums[mid] < target) {
                left = mid + 1;          // Target must be on the right
            } else {
                if (nums[mid] === target) index = mid; // Possible left boundary found
                right = mid - 1;         // Keep searching to the left
            }
        }

        return index; // Return the leftmost index of target, or -1
    }

    // Helper function to find the right (last) boundary of target
    function findRight(nums, target) {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target) {
                right = mid - 1;         // Target must be on the left
            } else {
                if (nums[mid] === target) index = mid; // Possible right boundary found
                left = mid + 1;          // Keep searching to the right
            }
        }

        return index; // Return the rightmost index of target, or -1
    }

    // Get the first and last positions using helper functions
    const start = findLeft(nums, target);    // Find start index of target
    const end = findRight(nums, target);     // Find end index of target

    return [start, end]; // Return result as an array
}

var a = searchRange(nums, target);
console.log(a);
