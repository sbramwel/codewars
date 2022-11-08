// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// My solution
function GetSum(a, b) {
    return (a + b) * (Math.abs(a - b) + 1) / 2;