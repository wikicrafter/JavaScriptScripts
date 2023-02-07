/*
Defining a function
A function definition is a regular binding where the value of the 
binding is a function. For example, this code defines square to refer 
to a function that produces the square of a given number:
*/

console.log(`
const square = function (x) {
    return x * x;

}; 

console.log(square(12)); `);

const square = function (x) {
    return x * x;

}; 

console.log(square(12)); 


/*

const makeNoise = function() {
  console.log("Pling!");
};

makeNoise();
// → Pling!

const power = function(base, exponent) {
  let result = 1;
  for (let count = 0; count < exponent; count++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 10));
// → 1024


*/