console.log(`
We’ve seen that % (the remainder operator) can be used to test 
whether a number is even or odd by using % 2 to see whether it’s 
divisible by two. Here’s another way to define whether a positive 
whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) 
and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a 
way to fix this?

// Your code here.

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));

`)
// My code 
function isEven(num) {
    if (num === 0) return true;
    else if (num === 1) return false;
    else if (num < 0) return isEven(-num);
    else return isEven(num - 2);
  }

  console.log(`
  This implementation uses multiple if statements to 
  determine the evenness of num according to the description. 
  The function checks whether num is 0, in which case it returns true 
  because 0 is even. If num is 1, it returns false because 1 is odd. 
  If num is negative, it returns the result of calling isEven with the 
  absolute value of num to handle negative inputs. For all other values 
  of num, it returns the result of calling isEven with num - 2. This 
  continues the recursion until num is 0 or 1, at which point the 
  function returns the final result.
Here is an output down below:

  `)
  console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false
