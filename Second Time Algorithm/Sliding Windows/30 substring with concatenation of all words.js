var findSubstring = function(s, words) {
    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalWords = wordLen * wordCount;

    const result = [];


    const wordRecord = new Map();
    for(let i = 0; i <wordCount; i++) {
        wordRecord.set(words[i], (wordRecord.get(words[i]) || 0 + 1));
    }

    for(let i= 0; i <= s.length - totalWords; i++) {
        const seen = new Map();
        let j = 0;
        while(j < wordCount) {
            let wordStart = i + j *wordLen;
            let word = s.substring(wordStart, wordStart + wordLen);

            if(!wordRecord.has(word)) break;

            seen.set(word, (seen.get(word) || 0) + 1);

            if(seen.get(word) > wordRecord(word)) break;
            j++;
        }
        if(j === wordCount) {
            result.push(i);
        }
    }
    return result;

}