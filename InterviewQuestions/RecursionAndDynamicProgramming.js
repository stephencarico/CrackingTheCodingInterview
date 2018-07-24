///////////////////////////////////////////////////////////////////////
// --------------- RECURSION AND DYNAMIC PROGRAMMING --------------- //
///////////////////////////////////////////////////////////////////////

// //////////////////////////////////// //
// ---------- 8.1 TRIPLE STEP ---------- //
// //////////////////////////////////// // 

// BRUTE FORCE ~ O(N)
// function numWays(N) {
//   let answer = 0;
//   let recurse = function(number) {
//     if (number === 0) {
//       answer++;
//     } else if (number > 0) {
//       recurse(number - 1);
//       recurse(number - 2);
//       recurse(number - 3);
//     }
//   }
//   recurse(N)
//   return answer;
// }

// MEMOIZATION ~ O(LOG N)
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

// console.log(numWays(3))

// console.log(count_ways(5, []))

// //////////////////////////////////// //
// ------- 8.2 ROBOT IN A GRID ------- //
// //////////////////////////////////// //

function findPaths(grid) {
  let paths = [];
  let endRow = grid.length - 1
  let endCol = grid[0].length - 1

  function recurse(row, col, currPath) {
    if (row === endRow && col === endCol) {
      paths.push(currPath.concat([[row,col]]))
    } 
    else if (row <= endRow && col <= endCol) {
      if (row < endRow && grid[row+1][col] !== 'x') {
        recurse(row + 1, col, currPath.concat([[row,col]]))
      }
      if (col < endCol && grid[row][col+1] !== 'x') {
        recurse(row, col + 1, currPath.concat([[row,col]]))
      }
    }
  }

  recurse(0,0,[]);
  return paths;
}

// TEST //

var grid = [
  ['0', '0', '0', '0'],
  ['0', 'x', '0', 'x'],
  ['x', '0', '0', '0'],
];

// console.log(findPaths(grid));

// //////////////////////////////////// //
// ---------- 8.3 MAGIC INDEX --------- //
// //////////////////////////////////// //

var findMagic = function(array, start, end) {
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined) {
    end = array.length - 1;
  }

  var mid = Math.floor(start + (end - start) / 2)

  if (mid === start && array[mid] !== mid) {
    return -1;
  } else if (mid === array[mid]) {
    return mid
  } else if (mid < array[mid]) {
    return findMagic(array, start, mid)
  } else {
    return findMagic(array, mid, end)
  }
};

/* TEST */
// console.log(findMagic([-1, 0, 1, 3, 9, 100]), 3);
// console.log(findMagic([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
// console.log(findMagic([5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct

// //////////////////////////////////// //
// ----------- 8.4 POWER SET ---------- //
// //////////////////////////////////// //

function PowerSet(set) {
  let subsets = [];

  function recurse(currSet, remainingSet) {
    subsets.push(currSet);
    for (let i = 0; i < remainingSet.length; i++) {
      recurse(currSet.concat([remainingSet[i]]), remainingSet.slice(i+1))
    }
  }

  recurse([], set)
  return subsets;
}


// TEST //
// console.log(PowerSet([1,2,3,4]))

// ///////////////////////////////////////////// //
// ----------- 8.5 RECURSIVE MULTIPLY ---------- //
// ///////////////////////////////////////////// //

function recursiveMultiply(a,b) {
  if (a < 0 || b < 0) {
    throw new Error("a and b should only be positive numbers")
  }

  if (b === 0) {
    return 0;
  } else if (b === 1) {
    return a;
  } else {
    return recursiveMultiply(a, b-1) + a
  }
}

// TEST //
// console.log(recursiveMultiply(7,4))

// ///////////////////////////////////////////// //
// ------------- 8.6 TOWERS OF HANOI ------------ //
// ///////////////////////////////////////////// //

/*


SKIPPED


*/

// ////////////////////////////////////////////////// //
// ---------- 8.7 PERMUTATIONS WITHOUT DUPS --------- //
// ////////////////////////////////////////////////// //
function permuteString(string) {
  var answers = [];
  var recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    } else {
      for (var i = 0; i < remainingChars.length; i++) {
        recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0, i) + remainingChars.slice(i + 1))
      }
    }
  };
  recurse('',string);
  return answers;
}


var testString = 'abcd';
// console.log(permuteString(testString));
// currPerm = "a", remainingChars = 'bcd'
// currPerm = "ab", remainingChars = 'cd'
// currPerm = "abc", remainingChars = 'd'
// currPerm = "abcd", remainingChars = ''
// currPerm = "abcd", remainingChars = ''
// answers = 'abcd'
// 

/* TEST */

var testString = 'abcd';
console.log(permuteString(testString));


// ////////////////////////////////////////////////// //
// ----------- 8.8 PERMUTATIONS WITH DUPS ---------- //
// ////////////////////////////////////////////////// //
function permNoDups(string) {
  var answers = [];
  var recurse = function(currPerm, remainingChars) {
    if (remainingChars.length === 0) {
      answers.push(currPerm);
    } else {
      usedChars = {};
      for (var i = 0; i < remainingChars.length; i++) {
        if(!usedChars[remainingChars.charAt(i)]) {
          usedChars[remainingChars.charAt(i)] = true;
          recurse(currPerm + remainingChars.charAt(i), remainingChars.slice(0,i) + remainingChars(i+1))
        }
      }
    }
  }
  recurse("", string);
  return answers;
}













































