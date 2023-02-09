console.log(`We can read properties like length and 
toUpperCase from string values. But if you try to add 
a new property, it doesn’t stick.
Here is a example code:
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined
Now below is execution:
`)
let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined


console.log(`You can split a string on every 
occurrence of another string with split and join 
it again with join.`)

let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join(". "));
// → Secretarybirds. specialize. in. stomping