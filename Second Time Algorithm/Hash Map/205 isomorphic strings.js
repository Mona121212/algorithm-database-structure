var isIsomorphic = function(s, t) {
    const indexS = {};
    const indexT = {};

    for(let i = 0; i < s.length; i++) {
        // last index occurent location
        // compare to first occurent 
       if(!(indexS.hasOwnProperty(s[i]))) {

        indexS(s[i]) = i;
       }

       if(!(indexT.hasOwnProperty(t[i]))) {
        indexT(s[i]) =i;
       }

       if(indexS(s[i] !== indexT(s[i]))) {
        return false;
       }
    }
    return true;
}