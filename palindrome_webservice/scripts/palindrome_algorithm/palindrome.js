// running as a node module
if(typeof process === 'object') {
	var wordRule = require('../lib.js');
	module.exports = palindrome;
}

function palindrome(word) {
	if(wordRule(word) === null){
		return false;
	}else{
		let a = word.length;
		let firChar = 0;
		let c = parseInt(a/2);
		for(let i = a; i > c; i--){
			let endChar = i-1;
			if (word[firChar] === word[endChar]) {
					firChar++;
			}else {
				return false;
			}
		}
		return true;
	}
}
