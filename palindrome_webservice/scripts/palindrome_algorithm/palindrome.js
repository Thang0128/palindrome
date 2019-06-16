/*
 write function as a failing test.
 test only passes when you implement
 correct logic.
*/

function wordRule(word){
	let pattern = /[a-zA-Z]{2,}/
	assert.notEqual(word.match(pattern), null)
}

function palindrome(word) {
	if(wordRule !== null){
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
	node process does not have a window object
	if not window, then load as a node module
*/
if (!window) {
	// loading as a node module
	module.exports = palindrome;
} else {
	// loading in the browser
	console.log('loading palindrome function...');
}
