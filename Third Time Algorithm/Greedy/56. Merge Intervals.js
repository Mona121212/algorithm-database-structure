var merge = function(intervals) {
    if(intervals.length < 2) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let left = intervals[0][0];
    let right = intervals[0][1];

    for(let i = 1; i < intervals.length; i++) {
        if(interval[i][0] > right) {
            result.push(left, right);
            left = intervals[i][0];
            right = intervals[i][1];
        } else {
            intervals[i][1] = Math.max(intervals[i][1], right);
        }
    }

    // don't forget the last one

    result.push([left, right]);

    return result;
}