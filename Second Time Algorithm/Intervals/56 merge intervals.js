var merge = function(intervals) {
    const merged = [];
    intervals.sort((a, b) => a[0] - b[0]);

    // the first one point
    let prev = intervals[0];

    for(let i = 1; i < intervals.length; i++) {
        let interval = intervals[i];

        if(interval[0] < prev[1]) {
            prev[1] = Math.max(prev[1], interval[1]);
        } else {
            merged.push(prev);
        }
        // move to next element
        prev = interval;
    }
    merged.push(prev);
    return merged;
}