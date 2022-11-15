// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// My solution
function longest(s1, s2) {
    return (s1+s2).split('').sort().filter((a,b,c)=>a!==c[b-1]).join('');
  }