var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    if(pattern.length !== s.length) return false;

    const charToWord = {};
    const wordToChar = {};

    for(let i = 0; i < pattern.length; i++) {
        const c = pattern[i];
        const w = words[i];

        if(charToWord.hasOwnProperty(c)) {
            if(charToWord[c]!== w) return false;
        } else {
            charToWord[c] = w;
        }

        if(wordToChar.hasOwnProperty(w)) {
            if(wordToChar[w] !== c) return false;
        } else {
            wordToChar[w] = c;
        }
    }
    return true;
}