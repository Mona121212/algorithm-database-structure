var hIndex = function(citations) {

    citations.sort((a, b) => b - a)
    for(let i = 0; i < citations; i++) {

        // at least h papers that have each been cited at least h times.
        // i + 1 means be cited paper;
        if(citations[i] < i + 1) {
            return i;
        }
    }
    return citations.length;
}