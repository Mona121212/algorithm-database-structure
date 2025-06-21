var validPalindrome = function(s) {
    const newString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return newString === newString.split('').reverse().join('');
}