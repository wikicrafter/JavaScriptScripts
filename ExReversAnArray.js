function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      newArray.push(arr[i]);
    }
    return newArray;
  }
  
  function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
    return arr;
  }
  
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
  

  console.log(`The reverseArray function is a pure function 
  and does not have any side effects, as it does not 
  modify the input array. On the other hand, the 
  reverseArrayInPlace function modifies the input 
  array, and therefore has side effects.

  In general, pure functions are preferred as they 
  are easier to reason about and test, and they do 
  not have any unintended consequences. However, in certain 
  cases, such as when working with large arrays, 
  modifying the input array in place may be faster than 
  creating a new array, as it avoids the overhead of 
  copying all the elements to a new array`)