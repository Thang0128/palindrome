//if script is running in the node then export it
function isNodeProcess() {
	return typeof process === 'object';
}

if(isNodeProcess()) {
	// loading as a node module
	module.exports = isNodeProcess;
} else {
	// loading in the browser
	console.log('loading isNodeProcess...');
}
