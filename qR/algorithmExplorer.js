const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Algorithm definitions
const algorithms = [
  {
    name: 'Linear Search',
    definition: 'Linear search is a simple algorithm that sequentially checks each element in a list or array until a match is found or the end of the list is reached.',
    code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Element found at index i
    }
  }
  return -1; // Element not found
}

const array = [4, 2, 9, 1, 7];
const targetElement = 9;
console.log(linearSearch(array, targetElement)); // Output: 2`,
    example: `// Example:
const array = [4, 2, 9, 1, 7];
const targetElement = 9;
console.log(linearSearch(array, targetElement)); // Output: 2`,
  },
  {
    name: 'Binary Search',
    definition: 'Binary search is a more efficient algorithm used to find a specific element in a sorted list or array by repeatedly dividing the search space in half.',
    code: `function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Element found at index mid
    } else if (arr[mid] < target) {
      left = mid + 1; // Discard left half
    } else {
      right = mid - 1; // Discard right half
    }
  }
  return -1; // Element not found
}

const array = [1, 2, 4, 7, 9];
const targetElement = 9;
console.log(binarySearch(array, targetElement)); // Output: 4`,
    example: `// Example:
const array = [1, 2, 4, 7, 9];
const targetElement = 9;
console.log(binarySearch(array, targetElement)); // Output: 4`,
  },
  {
    name: 'Bubble Sort',
    definition: 'Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.',
    code: `function bubbleSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements at indices j and j + 1
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

const array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]`,
    example: `// Example:
const array = [64, 34, 25, 12, 22, 11, 90];
bubbleSort(array);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]`,
  },

  {
    name: 'Selection Sort',
    definition: 'Selection sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the list and swapping it with the first unsorted element.',
    code: `function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first unsorted element
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
}

const array = [64, 34, 25, 12, 22, 11, 90];
selectionSort(array);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]`,
    example: `// Example:
const array = [64, 34, 25, 12, 22, 11, 90];
selectionSort(array);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]`,
  },
  {
    name: 'Merge Sort',
    definition: 'Merge sort is a divide-and-conquer algorithm that divides the input array into two halves, recursively sorts them, and then merges the sorted halves to produce a sorted array.',
    code: `function mergeSort(arr) {
  const n = arr.length;

  if (n <= 1) {
    return arr;
  }

  const mid = Math.floor(n / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // Copy the remaining elements from the left or right array, if any
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]`,
    example: `// Example:
const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]`,
  },
  {
    name: 'Quick Sort',
    definition: 'Quick sort is a divide-and-conquer algorithm that selects a pivot element and partitions the array around the pivot, such that all elements less than the pivot come before it and all elements greater than the pivot come after it. The process is then repeated for the sub-arrays on either side of the pivot.',
    code: `function quickSort(arr, low, high) {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, high);
  return i + 1;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const array = [64, 34, 25, 12, 22, 11, 90];
quickSort(array, 0, array.length - 1);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]`,
    example: `// Example:
const array = [64, 34, 25, 12, 22, 11, 90];
quickSort(array, 0, array.length - 1);
console.log(array); // Output: [11, 12, 22, 25, 34, 64, 90]`,
  },
  // Add more algorithms here...
];

function showAlgorithms() {
  console.log('Available Algorithms:');
  console.log('---------------------');
  algorithms.forEach((algorithm, index) => {
    console.log(`${index}. ${algorithm.name}`);
  });
  console.log();
}

function showDefinition(index) {
  if (index >= 0 && index < algorithms.length) {
    console.log(`Definition of ${algorithms[index].name}:`);
    console.log('-------------------------------');
    console.log(algorithms[index].definition);
    console.log();
  } else {
    console.log('Invalid algorithm index.');
  }
  rl.prompt();
}

function showExample(algorithmName) {
  const index = algorithms.findIndex(algorithm => algorithm.name.toLowerCase() === algorithmName);
  if (index !== -1) {
    console.log(`Example for ${algorithms[index].name}:`);
    console.log('--------------------------------');
    console.log(algorithms[index].example);
    console.log();
  } else {
    console.log('Algorithm not found.');
  }
  rl.prompt();
}

function processInput(input) {
  const command = input.trim().toLowerCase();

  if (command === 'algorithms') {
    showAlgorithms();
  } else if (command.startsWith('definition')) {
    const index = parseInt(command.split(' ')[1]);
    showDefinition(index);
  } else if (command.startsWith('show me')) {
    const algorithmName = command.substring(7).trim();
    showExample(algorithmName);
  } else if (command === 'exit') {
    rl.close();
  } else {
    console.log(`Invalid command. Please try again.
   Or type" 
   "algorithms" 
   "definition (index)" 
   "show me (specific algorithm)"
    `);
    console.log();
  }
}

function startCLI() {
  console.log('Welcome to the Algorithm Explorer CLI!');
  console.log('Type "algorithms" to see the available algorithms.');
  console.log('Type "definition <index>" to see the definition of an algorithm.');
  console.log('Type "show me <algorithm name>" to see an example of an algorithm.');
  console.log('Type "exit" to quit the program.');
  console.log();

  rl.prompt();

  rl.on('line', (input) => {
    processInput(input);
  });
}

startCLI();
