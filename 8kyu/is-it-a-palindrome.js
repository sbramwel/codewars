// Write a function that checks if a given string (case insensitive) is a palindrome.

// My solution
function isPalindrome(x) {
    let reverse= x.split('').reverse().join('')
    if (reverse.toLowerCase()==x.toLowerCase()){
    return true;
    }
    else{
        return false;
    }
    }
      