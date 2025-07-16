var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for(let i = 0; i < intervals.length; i++) {
        const [start, end] = result[result.length - 1];
        const [curStart, curEnd] = intervals[i];

        if(curStart <= end) {
            result[result.length - 1][1] = Math.max(end, curEnd);
        } else {
            result.push(intervals[i])
        }
    }
    return result;
}