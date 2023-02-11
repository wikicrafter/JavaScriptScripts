console.log(`
JSON looks similar to JavaScript’s way of writing arrays 
and objects, with a few restrictions. All property names 
have to be surrounded by double quotes, and only simple 
data expressions are allowed—no function calls, bindings, 
or anything that involves actual computation. Comments are 
not allowed in JSON.


A journal entry might look like this when represented as 
JSON data:

{
    "squirrel": false,
    "events": ["work", "touched tree", "pizza", "running"]
  }

  JavaScript gives us the functions JSON.stringify and 
  JSON.parse to convert data to and from this format. 
  The first takes a JavaScript value and returns a 
  JSON-encoded string. The second takes such a string 
  and converts it to the value it encodes.

  let string = JSON.stringify({squirrel: false,
    events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]
Execcution:
`)

let string = JSON.stringify({squirrel: false,
    events: ["weekend"]});
console.log(string);
// → {"squirrel":false,"events":["weekend"]}
console.log(JSON.parse(string).events);
// → ["weekend"]