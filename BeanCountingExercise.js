console.log(`
Bean counting
You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase “B” characters there 
are in the string.

Next, write a function called countChar that behaves like countBs, 
except it takes a second argument that indicates the character that is 
to be counted (rather than counting only uppercase “B” characters). 
Rewrite countBs to make use of this new function.

// Your code here.

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4

`)

console.log(`Here is the implementation of that code:`)

// code 
function countBs(string) {
    return countChar(string, "B");
  }
  
  function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  console.log(`
  The countBs function simply calls countChar with the 
  arguments string and "B", so it counts the number of 
  uppercase "B" characters in the string.

The countChar function takes a string and a character as 
arguments, and uses a for loop to iterate over the characters 
in the string. For each character, it checks if it is equal to 
the char argument, and if it is, it increments the count variable. 
The function returns the final value of count.

The output of the function:

  `)

  console.log(countBs("BBC")); // 2
console.log(countChar("kakkerlak", "k")); // 4

