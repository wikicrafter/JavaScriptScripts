

console.log(`


Arrow functions
There’s a third notation for functions, which looks very different 
from the others. Instead of the function keyword, it uses an arrow 
(=>) made up of an equal sign and a greater-than character (not to be 
    confused with the greater-than-or-equal operator, which is written >=).

const power = (base, exponent) => {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};
The arrow comes after the list of parameters and is followed by the 
function’s body. It expresses something like “this input (the parameters) 
produces this result (the body)”.

When there is only one parameter name, you can omit the parentheses 
around the parameter list. If the body is a single expression, rather 
than a block in braces, that expression will be returned from the function. So, these two definitions of square do the same thing:

const square1 = (x) => { return x * x; };
const square2 = x => x * x;
When an arrow function has no parameters at all, its parameter 
list is just an empty set of parentheses.

const horn = () => {
  console.log("Toot");
};
There’s no deep reason to have both arrow functions and function 
expressions in the language.

`)

