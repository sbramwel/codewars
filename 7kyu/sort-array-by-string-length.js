// Write a function that takes an array of strings as an argument and returns a sorted
// array containing the same strings, ordered from shortest to longest.

// My solution
function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length);
  };
  