// RECURSION
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  };
  return fibonacci(n-1) + fibonacci(n-2);
}

// MEMOIZATION
function memoization(n, memo) {
  var result;
  if(memo[n] != null) {
    return memo[n];
  };
  if(n === 1 || n ===2) {
    result = 1;
  } else {
    result = memoization(n-1, memo) + memoization(n-2, memo);
  }
  memo[n] = result;
  return result;
}

// BOTTOM UP
function fib_bottom_up(n) {
  if(n === 1 || n === 2) {
    return 1;
  }
  var bottom_up = []
  bottom_up[1] = 1;
  bottom_up[2] = 1;
  for (var i = 3; i <= n; i++) {
    bottom_up[i] = bottom_up[i-1] + bottom_up[i-2];
  }
  return bottom_up[n];
}

console.log(fibonacci(35))
console.log(memoization(100, []))
console.log(fib_bottom_up(100))

