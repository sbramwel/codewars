// Given the a list of numbers, return a fixed list so that the values increment 
// by 1 for each index from the minimum value up to the maximum value (both included).

// My solution
function pipeFix(numbers){
    let ans = [];
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
      ans.push(i);
    }
    return ans;
  }