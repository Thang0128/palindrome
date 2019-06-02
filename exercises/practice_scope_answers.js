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

/*
	1. what scope does the 'a' variable live in?
	2. prove that function problem2 & problem3 reference the same variable.
*/
function problem2() {
    a = 3;
    console.log(a);
}
problem2();
console.assert(a === 3);

var a = 10;
function problem3() {
    a = 4;
    console.log(a);
}
problem3();
console.assert(a === 4);

/*
	1. must implement first() to prevent the error from throwing in second()
*/
var b = 5;
function first() {
	// write code here
  b = 6;
}

function second() {
	if (b !== 6) throw new Error('fix me');
}
first();
second();

/*
	1. make the assertion below pass
*/
var c = 6;
function test() {
     c = 7;
    function again() {
        let c = 8;
        console.log(c);  // First
    }
    again();
    console.log(c);  // Second
}
test();
console.assert(c === 7); // third
