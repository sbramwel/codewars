// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// My solution
let arr = [];
  for(let i = 0; i < word.length; i++){
    if(word[i] == word[i].toUpperCase())
      arr.push(i);
  }
  return arr;