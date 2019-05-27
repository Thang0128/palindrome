const palindrome = require('./palindrome');

const words = [
	"racecar",
	"holiday",
	"dad",
	"sarcasm",
	"mom",
];

let word = '';
while(word = words.pop()) {
	if (palindrome(word)) {
		console.log(`${word} is a palindrome`);
	} else {
		console.log(`${word} is NOT a palindrome`);
	}
}
