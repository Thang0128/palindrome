/*
	1. what happens and why? 
	2. how do we get the a to print undefined without changing the if block
*/
// global or script scope
function problem1() {
    if(true) {
    	// local block scope
        var a = 5;
    }
    console.log(a);
}
problem1();
