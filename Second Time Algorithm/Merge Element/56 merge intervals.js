intervals = [[1,3],[2,6],[8,10],[15,18]]
var merge = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0])
    let merged = [];
    let currentInterval = intervals[0];

    for(let i = 1; i < intervals.length; i++) {
        const nextInterval = intervals[i];

        if(currentInterval[1] >= nextInterval[0]) {
            currentInterval[1] = Math.max(currentInterval[1], nextInterval[1])
        } else {
            merged.push(currentInterval);
            currentInterval = nextInterval;
        }
    }
    merged.push(currentInterval);
    return merged;
}

var a = merge(intervals);
console.log(a);