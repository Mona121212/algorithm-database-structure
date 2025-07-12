var longestCommonPrefix = function(strs) {
    let pref = strs[0];
    let prefLength = pref.length;

    for(let i = 0; i < strs.length; i++) {
        while(pref !== strs[i]) {
            prefLength--;
            if(pref === 0) return "";

            pref = pref.substring(0, prefLength)
        }
    }
    return pref;
}