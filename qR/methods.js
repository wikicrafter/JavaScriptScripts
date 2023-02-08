console.log('First example')

let doh = "Doh";
console.log(typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
console.log(`---------------------`)

console.log(`Properties that contain functions are generally called 
methods of the value they belong to, as in “toUpperCase is a method 
of a string”.`)

console.log(`---------------------`)


console.log(`Second example.
This example demonstrates two methods you can use to manipulate arrays:`)

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]

