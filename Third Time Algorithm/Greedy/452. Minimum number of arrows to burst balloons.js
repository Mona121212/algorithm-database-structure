var findMinArrowShots = function(points) {
    if(!points.length) return 0;

    points.sort((a, b) => a[1] - b[1]);

    let arrow = 1;

    for(let i = 1; i < points.length; i++) {
        if(points[i][0] > points[i - 1][1]) {
            arrow += 1;
        } else {
            points[i][1] = Math.max(points[i][1], points[i - 1][1]);
        }
    }

    return arrow;
}