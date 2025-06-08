function findSubstring(s, words) {
    if (!s || words.length === 0) return [];

    const wordLen = words[0].length; // Length of each word
    const totalLen = wordLen * words.length; // Total length of all words combined
    const wordCount = new Map(); // Hash map to store the frequency of each word in `words`
    const result = []; // Array to store the resulting starting indices

    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    } // Count the occurrences of each word in `words`

    for (let i = 0; i <= s.length - totalLen; i++) {
        const seen = new Map(); // Map to record the words found in the current window and their counts
        let j = 0;

        while (j < words.length) { // Loop as long as fewer than words.length words have been checked
            const wordStart = i + j * wordLen; // Calculate the start index of the current word in `s`
            const word = s.substring(wordStart, wordStart + wordLen); // Extract the word of length `wordLen`

            if (!wordCount.has(word)) break; // If the word is not in the original `words`, break out

            seen.set(word, (seen.get(word) || 0) + 1); // Add the word to `seen` and update its count

            if (seen.get(word) > wordCount.get(word)) break; // If this word appears too many times, break

            j++; // Move to the next word in this window
        }

        if (j === words.length) { // If we successfully matched all the words with correct counts
            result.push(i);
        }
    }

    return result;
}

const s = "barfoothefoobarman";
const words = ["foo", "bar", "the"];

var a = findSubstring(s, words);
console.log(a); // expected output: [0，6]
