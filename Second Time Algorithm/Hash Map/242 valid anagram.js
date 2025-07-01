var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;

    let counter = new Map();

    for(let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }

    for(let char of t) {
        if(!counter.has(char) || counter.get(char)) {
            return false;
        }
        counter.get(char, counter.get(char) - 1);
    }
    return true;
}