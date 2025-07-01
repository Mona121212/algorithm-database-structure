var isIsomorphic = function(s, t) {
    const lastIndexS = {};
    const lastIndexT = {};

    for(let i = 0; i < s.length; i++) {
        if(!(s[i] in lastIndexS)) {
            lastIndexS[s[i]] = i;
        }

        if(!(t[i] in lastIndexT)) {
            lastIndexT[t[i]] = i;
        }

        if(lastIndexS[s[i]] !== lastIndexT[t[i]]) {
            return false;
        }
    }
    return true;
}