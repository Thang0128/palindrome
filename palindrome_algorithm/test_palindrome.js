const palindrome = require('./palindrome');

console.assert(palindrome("racecar"));
console.assert(!palindrome("holiday"));
console.assert(palindrome("dad"));
console.assert(!palindrome("sarcasm"));
console.assert(palindrome("mom"));