console.log(`
Declaration notation
There is a slightly shorter way to create a function binding.
 When the function keyword is used at the start of a statement, 
 it works differently.

function square(x) {
  return x * x;
}
This is a function declaration. The statement 
defines the binding square and points it at the given function. 
It is slightly easier to write and doesn’t require a semicolon after 
the function.

There is one subtlety with this form of function definition.

console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
The preceding code works, even though the function is defined 
below the code that uses it. Function declarations are not part of 
the regular top-to-bottom flow of control. They are conceptually moved 
to the top of their scope and can be used by all the code in that scope. 
This is sometimes useful because it offers the freedom to order code in a 
way that seems meaningful, without worrying about having to define all 
functions before they are used

`)

console.log("The future says:", future());
function future() {
    return 'You will have flying cars';
}