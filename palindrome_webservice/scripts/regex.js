// running as a node module
if(typeof process === 'object') {
	module.exports = wordRule;
}

function wordRule(word) {
	let pattern = /[a-zA-Z]{2,}/
	return word.match(pattern)
}
