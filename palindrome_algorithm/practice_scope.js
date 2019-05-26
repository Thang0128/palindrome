console.log("script scope");
let a = 1;
function fun(){
  console.log("block scope");
   let a = 2;
  console.log(a);
   a = 3;
  console.log(a);
}

fun();
console.log(a);
