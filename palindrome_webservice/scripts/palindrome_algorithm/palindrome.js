/*
 write function as a failing test.
 test only passes when you implement
 correct logic.
*/
function palindrome(word) {
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
module.exports = palindrome;