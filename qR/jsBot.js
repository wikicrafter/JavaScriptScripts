// Require the 'readline' module for CLI interaction
const readline = require('readline');

// Create a readline interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define a function to handle user questions
function handleQuestion(question) {
  // Convert the question to lowercase for easier comparison
  question = question.toLowerCase();

  // Check for different question patterns and provide corresponding answers
  if (question.includes("javascript?")) {
    return "JavaScript is a high-level programming language that was primarily designed for adding interactivity to web pages. It allows developers to create dynamic and interactive web applications by manipulating the content and behavior of web pages.";
  } else if (question.includes("data types?")) {
    return "JavaScript supports various data types, including numbers, strings, booleans, arrays, objects, and more.";
  } else if (question.includes("variables?")) {
    return "In JavaScript, you can declare variables using the 'var', 'let', or 'const' keywords. For example: 'let count = 10;'";
  } else if (question.includes("conditional statement?")) {
    return "Conditional statements in JavaScript, such as 'if', 'else if', and 'else', allow you to make decisions based on certain conditions.";
  } else if (question.includes("define a function?")) {
    return "Functions in JavaScript can be defined using the 'function' keyword. For example: 'function greet(name) { console.log(\"Hello, \" + name + \"!\"); }'";
  } else if (question.includes("how do you loop in javascript?")) {
    return "JavaScript provides loops like 'for', 'while', and 'do-while' to iterate over values or execute code repeatedly.";
  } else if (question.includes("DOM in javascript?")) {
    return "JavaScript allows you to manipulate the Document Object Model (DOM) to access, modify, and create HTML elements dynamically.";
  } else if (question.includes("handle events in javascript?")) {
    return "JavaScript enables you to handle events by attaching event listeners to DOM elements and defining functions to execute when events occur.";
  } else if (question.includes("what is a callback function in javascript?")) {
    return "A callback function is a function that is passed as an argument to another function and is executed later. It allows for asynchronous programming and handling of events.";
  } else if (question.includes("what is a closure in javascript?")) {
    return "A closure is a function that has access to its own scope, the scope in which it is defined, and the scope of the outer function. It allows for preserving data privacy and creating modules.";
  } else if (question.includes("What are higher-order functions in JavaScript??")) {
    return "Higher-order functions are functions that can accept other functions as arguments or return functions as results. They enable functional programming paradigms.";
  } else if (question.includes("what is the 'this' keyword in javascript?")) {
    return "The 'this' keyword refers to the context in which a function is executed. It typically represents the object on which a method is called or the object that is currently being constructed.";
  } else if (question.includes("what are arrow functions in javascript?")) {
    return "Arrow functions are a concise syntax for writing function expressions in JavaScript. They have a shorter syntax and lexically bind the 'this' value.";
  } else if (question.includes("how do you handle errors in javascript?")) {
    return "Errors in JavaScript can be handled using try-catch blocks. The 'try' block contains the code that may throw an error, and the 'catch' block handles the error if one occurs.";
  } else if (question.includes("what is asynchronous programming in javascript?")) {
    return "Asynchronous programming in JavaScript allows for non-blocking code execution, enabling tasks like AJAX requests and file I/O. It involves callbacks, promises, or async/await syntax.";
  } else if (question.includes("object-oriented programming in javascript?")) {
    return "Object-oriented programming (OOP) is a programming paradigm that uses objects to structure code. JavaScript supports OOP principles like encapsulation, inheritance, and polymorphism.";
  } else if (question.includes("destructuring assignment in javascript?")) {
    return "Destructuring assignment is a feature that allows you to extract values from arrays or objects into individual variables. It provides a concise way to unpack values.";
  } else if (question.includes("template literals in javascript?")) {
    return "Template literals, also known as template strings, are a way to create strings with embedded expressions. They are enclosed by backticks (`) and allow for multi-line strings and expression interpolation.";
  } else if (question.includes("show me all questions?")) {
    return getAllQuestions();
  } else {
    return "Pleas ask questions as shown";
  }
}

// Function to get all questions
function getAllQuestions() {
  const questions = [
    "What is JavaScript?",
    "What are the data types in JavaScript?",
    "How do you declare variables in JavaScript?",
    "What is a conditional statement in JavaScript?",
    "How do you define a function in JavaScript?",
    "How do you loop in JavaScript?",
    "What is the DOM in JavaScript?",
    "How do you handle events in JavaScript?",
    "What is a callback function in JavaScript?",
    "What is a closure in JavaScript?",
    "What are higher-order functions in JavaScript?",
    "What is the 'this' keyword in JavaScript?",
    "What are arrow functions in JavaScript?",
    "How do you handle errors in JavaScript?",
    "What is asynchronous programming in JavaScript?",
    "What is object-oriented programming in JavaScript?",
    "What is destructuring assignment in JavaScript?",
    "What are template literals in JavaScript?"
  ];

  return "Here are some questions you can ask:\n" + questions.join("\n");
}

// Ask questions in a loop until the user exits
function askQuestions() {
  rl.question("To see all questions u could ask: show me all questions? (type 'c' to quit) ", function(question) {
    if (question.toLowerCase() === "c") {
      rl.close();
      return;
    }

    const answer = handleQuestion(question);
    console.log("Answer: " + answer + "\n");
    askQuestions();
  });
}

// Start asking questions
askQuestions();
