// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// My solution
function getDivisorsCnt(n){
    let cnt = 0;
    for(let i = 1; i <= n; i++){
      if(!(n % i)) cnt++;
    }
    return cnt;
}