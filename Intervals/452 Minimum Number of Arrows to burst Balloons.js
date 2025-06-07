
var findMinArrowShots = function(points) {
    if (!points.length) return 0;

    
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1;
    let end = points[0][1];

    for (let i = 1; i < points.length; i++) {
        const [start, finish] = points[i];
        
        if (start > end) {
            arrows++;
            end = finish;
        }
    }

    return arrows;
};


const assert = require('assert');

function testFindMinArrowShots() {

    assert.strictEqual(
        findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]),
        2,
        "Test Case 1 Failed"
    );


    assert.strictEqual(
        findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]),
        4,
        "Test Case 2 Failed"
    );


    assert.strictEqual(
        findMinArrowShots([[1,10],[2,9],[3,8],[4,7]]),
        1,
        "Test Case 3 Failed"
    );

    assert.strictEqual(
        findMinArrowShots([]),
        0,
        "Test Case 4 Failed"
    );


    assert.strictEqual(
        findMinArrowShots([[1,2]]),
        1,
        "Test Case 5 Failed"
    );

    console.log("✅ All test cases passed!");
}


testFindMinArrowShots();
