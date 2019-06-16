const isNodeProcess = require('../lib.js');

function wordRule(word){
	let pattern = /[a-zA-Z]{2,}/
	return word.match(pattern)
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

/*
	export if node process
*/

if(isNodeProcess()) {
	// loading as a node module
	module.exports = palindrome;
} else {
	// loading in the browser
	console.log('loading palindrome function...');
}
