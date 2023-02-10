console.log(`As we’ve seen, Math is a grab bag of 
number-related utility functions, such as Math.max 
(maximum), Math.min (minimum), and Math.sqrt (square root).

The Math object is used as a container to group a bunch of 
related functionality. There is only one Math object, and 
it is almost never useful as a value. Rather, it provides 
a namespace so that all these functions and values do not 
have to be global bindings.`)


function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
            y: radius * Math.sin(angle)};
  }
  console.log(randomPointOnCircle(2));
  // → {x: 0.3667, y: 1.966}

  console.log(`The previous example used Math.random. 
  This is a function that returns a new pseudorandom 
  number between zero (inclusive) and one (exclusive) 
  every time you call it.`)

  console.log(Math.random());
// → 0.36993729369714856
console.log(Math.random());
// → 0.727367032552138
console.log(Math.random());
// → 0.40180766698904335

console.log(`If we want a whole random number instead of 
a fractional one, we can use Math.floor (which rounds down 
    to the nearest whole number) on the result of 
    Math.random.`)

    console.log(Math.floor(Math.random() * 10));
// → 2