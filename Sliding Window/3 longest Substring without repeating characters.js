// Function to find the length of the longest substring without repeating characters
var lengthOfLongestSubstring = function(s) {
    let left = 0; // Left pointer of the sliding window
    let maxLength = 0; // Maximum length found so far
    let charSet = new Set(); // Set to store unique characters in the current window

    for (let right = 0; right < s.length; right++) {
        // If character at right pointer is already in the set, shrink the window from the left
        while (charSet.has(s[right])) {
            charSet.delete(s[left]); // Remove the leftmost character
            left++; // Move the left pointer to the right
        }

        charSet.add(s[right]); // Add current character to the set
        maxLength = Math.max(maxLength, right - left + 1); // Update max length if needed
    }

    return maxLength;
};

// ---------- Test cases ----------
const testCases = [
    { input: "abcaacbb", expected: 3 },     // "abc"
    { input: "bbbb", expected: 1 },        // "bbb"
    { input: "pwwkew", expected: 3 },       // "wke"
    { input: "", expected: 0 },             // Empty string
    { input: "abcdef", expected: 6 },       // All unique
    { input: "abba", expected: 2 },         // "ab" or "ba"
];

// Run test cases
for (const { input, expected } of testCases) {
    const result = lengthOfLongestSubstring(input);
    console.log(`Input: "${input}", Output: ${result}, Expected: ${expected}, ✅ ${result === expected}`);
}
