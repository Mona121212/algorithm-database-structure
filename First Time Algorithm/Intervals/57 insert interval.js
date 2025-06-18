// Function to insert a new interval and merge overlapping intervals
var insert = function(intervals) {
    if (!intervals.length) return [];

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const [curStart, curEnd] = intervals[i];
        const [lastStart, lastEnd] = result[result.length - 1];

        if (curStart <= lastEnd) {
            result[result.length - 1][1] = Math.max(lastEnd, curEnd);
        } else {
            result.push(intervals[i]);
        }
    }

    return result;
};

const assert = require('assert');

function testInsert() {
    assert.deepStrictEqual(
        insert([[1,3],[6,9],[2,5]]), // [2,5] is the newInterval already added
        [[1,5],[6,9]],
        "Test Case 1 Failed"
    );

    assert.deepStrictEqual(
        insert([[1,2],[3,5],[6,7],[8,10],[12,16],[4,8]]), // [4,8] is newInterval
        [[1,2],[3,10],[12,16]],
        "Test Case 2 Failed"
    );

    assert.deepStrictEqual(
        insert([[5,7]]),
        [[5,7]],
        "Test Case 3 Failed"
    );

    assert.deepStrictEqual(
        insert([[10,12],[1,3]]),
        [[1,3],[10,12]],
        "Test Case 4 Failed"
    );

    assert.deepStrictEqual(
        insert([[1,2],[5,6]]),
        [[1,2],[5,6]],
        "Test Case 5 Failed"
    );

    console.log("✅ All test cases passed!");
}

testInsert();
