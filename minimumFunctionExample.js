
// exercise 1.
//My code down below with ternary operator 

//function min(a, b) {
  //  return (a < b) ? a : b;
  //}

  // without ternary operator 
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  
  

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10