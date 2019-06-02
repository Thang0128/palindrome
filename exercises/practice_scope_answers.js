/*
	1. what happens and why?
	2. how do we get the a to print undefined without changing the if block
*/
// global or script scope
function problem1() {
    if(true) {
    	// local block scope
        let a = 5;
    }
    var a;
    console.log(a);
}
problem1();
