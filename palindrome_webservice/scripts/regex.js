const isNodeProcess = require('./lib.js');

function wordRule(word){
	let pattern = /[a-zA-Z]{2,}/
	return word.match(pattern)
}

if(isNodeProcess()) {
	// loading as a node module
	module.exports = wordRule;
} else {
	// loading in the browser
	console.log('loading wordRule function...');
}
