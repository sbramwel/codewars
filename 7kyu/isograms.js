// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// My solution
function isIsogram(word){
    word = word.toLowerCase().split("").sort();
    for (var i=0;i<word.length-1;i++){
      if (word[i]==word[i+1]) return false;
      }
    return true;
  }