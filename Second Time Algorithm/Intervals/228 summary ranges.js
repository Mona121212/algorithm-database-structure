var summaryRanges = function(nums) {
    let result = [];

    // definate the i for while loop
    let i = 0;
    while(i < nums.length) {
        let start = nums[i];
        let end = start;

        while(i + 1 < nums.length && nums[i + 1] === nums[i] + 1) {
            // move to next location and let end equl to new element;if not, end always late one location
            i++;
            end = nums[i];
        }

        if(start === end) {
            result.push(`${start}`);
        } else {
            result.push(`${start} -> ${end} `);
        }
        
        i++;
    }
    return result;
}