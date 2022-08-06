// Given a list of integers, determine whether the sum of its elements is odd or even.
// Give your answer as a string matching "odd" or "even".

// My solution
function oddOrEven(array) {
    return array.reduce(function(a, b) {
      return a + b
    }, 0) % 2 === 0 ? 'even' : 'odd';
  }
  