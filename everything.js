/*

Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method.

*/

function every(array, test) {
    return !array.some(element => !test(element));
  }
  
  /*

  This implementation uses the some method to test whether there is any element of the array for which the test function returns false. If such an element is found, the some method returns true, so we negate this value with the ! operator to get false. If no such element is found, the some method returns false, so we negate this value to get true.

We can test both implementations using the following code:

*/
console.log(every([1, 3, 5], n => n < 10)); // true
console.log(every([2, 4, 16], n => n < 10)); // false
console.log(every([], n => n < 10)); // true
