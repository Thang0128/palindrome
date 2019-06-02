
/*
	1. what happens and why? 
	2. how do we get the a to print undefined
*/
function problem1() {
    if(true) {
        var a = 5;
    }
    console.log(a);
}
problem1();


/*
	1. what scope does the 'a' variable live in?
	2. prove that function problem1 & problem2 reference the same variable.
*/
function problem2() {
    a = 3;
    console.log(a);
}
problem2();

var a;
function problem3() {
    a = 4;
    console.log(a);
}
problem3();


/*
	1. must implement first() to prevent the error from throwing in second()
*/
var b = 5;
function first() {
	// write code here
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
    var c = 7;
    function again() {
        var c = 8;
        console.log(c);  // First
    }
    again();
    console.log(c);  // Second
}
test();
console.assert(c === 7); // third

/*
 var a actually persists because of a concept called "closure".
 Because a is referenced inside the anonymous function, a is now inside
 the scope of that anonymous function.
 1. read about closures: https://www.w3schools.com/js/js_function_closures.asp
 2. read about anonymous functions: https://www.w3schools.com/js/js_function_definition.asp
 2. make the assertion below pass
*/
function funcWithAnonymousFunctionInside() {
    var a = 7;
    return function(b) {
        return a+b
    }
}
var f = funcWithAnonymousFunctionInside();
console.assert(f(0) === 12);
