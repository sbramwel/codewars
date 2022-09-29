// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// My solution
function findOdd(A) {
    return A.find((number) => A.filter((n) => number === n).length % 2)
  }


