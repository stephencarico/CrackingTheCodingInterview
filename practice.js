var numWays = function(n, memo) {
  if (n < 0) {
    return 0
  } else if (n === 0) {
    return 1
  } else if (memo[n] > -1) {
    return memo[n];
  } else {
    memo[n] = numWays(n-1, memo) + numWays(n-2, memo) + numWays(n-3, memo)
    return memo[n]
  }
};

/* TEST */

console.log(numWays(1, {}), 1);
console.log(numWays(2, {}), 2);
console.log(numWays(3, {}), 4);