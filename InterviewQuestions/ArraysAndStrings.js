///////////////////////////////////////////////////////////////////////
/////////// ------------- ARRAYS AND STRINGS ------------- ////////////
///////////////////////////////////////////////////////////////////////

// //////////////////////////// //
// ------- 1.1 IS UNIQUE ---------
// //////////////////////////// //
// input: string = 'hello'
// output: false
// input: string = '' X
// QUESTION: Safe to assume our string will have at least one charaget?
// input: string = 'a'
// input: string = 'abcdeff'

// METHOD ONE //
// Runtime = O(N^2)
// Space Complexity = O(1)
function all_unique_characters(string) {
  for (var i = 0; i < string.length; i++) {
    char = string[i];
    for (var j = i + 1; j < string.length; j++) {
      test_char = string[j];
      if(char == test_char) {
        return false;
      }
    }
  }
  return true;
}

// METHOD TWO //
// O(n log n)
function all_unique_characters(string) {
  for (var i = 0; i < string.length; i++) {
    char = string[i];
    new_string = string.slice(i+1)
    if (new_string.indexOf(char) > -1) {
      return false;
    }
  }
  return true;
}

// METHOD THREE //
// O(N) * O(1) = O(N)
function all_unique_characters(string) {
  database = {};
  for (var i = 0; i < string.length; i++) {
    char = string[i];
    if (database[char] == undefined) {
      database[char] = 1;
    } else {
      return false;
    }
  }
  return true;
}

// console.log(all_unique_characters('h'))

// -------- NOTES -------- //
// GOOD QUESTIONS:
//     1. Is the string in ASCII or a Unicode string?
// SOLUTIONS:
//     1. Create an array of boolean values



// //////////////////////////////////// //
// ------- 1.2 CHECK PERMUTATION ---------
// //////////////////////////////////// //
// two inputs:
//    string 1: 'abc'
//    string 2: 'cab'
// two inputs:
//    string 1: 'abb'
//    string 2: 'abe'
// QUESTION: Can we assume that both strings are of equal length? No
// QUESTION: Can we assume that these strings will not be empty? Yes
// edge case1:
//    string 1: ''
//    string 2: ''
// output: boolean (true/false)
// first condition: both have to be of equal lengths
// second condition: all characters w/in string1 MUST BE found in string2

// pseudocode: iterate through string 1, add each char to a hash table. Iterate through string 2, if at any point string2[i] is not contained within that hash table, return false. Otherwise, return true.

// runtime: O(N + N) + O(I) = O(2N) = O(N)
// space complexity: O(N)

function permutation_check(string_1, string_2) {
  checked_chars = {};

  for (var i = 0; i < string_1.length; i++) {
    var char = string_1[i].toLowerCase();
    if(checked_chars[char] == undefined) {
      checked_chars[char] = 1;
    } else {
      checked_chars[char] += 1;
    }
  }

  for (var i = 0; i < string_2.length; i++) {
    var char = string_2[i].toLowerCase();
    if(checked_chars[char] == undefined) {
      return false;
    } else {
      checked_chars[char] -= 1;
    }
  }

  return true;
}

// console.log(permutation_check('Abc', 'cab'))

// ------ NOTES ------ //
// GOOD QUESTIONS:
//     1. Is the permutation comparison case sensitive?
//     2. Are whitespaces significant?
// SOLUTIONS:
//     1. Sort the strings
//     2. Check if the two strings have identical character counts (WHICH I DID!)










// //////////////////////////////////// //
// ------------ 1.3 URLify ------------ //
// //////////////////////////////////// //

// QUESTION: Beacuse I am writing in Javascript, will my input string still contain the extra spaces at the end, which are there because of Java's rules? Or should I ignore them?

// input: "Mr John Smith"
// output: "Mr%20John%20Smith"

// pseudocode: iterate linearlly through string. At any point char == " ", char = "%20". Return updated string.

// Runtime: O(N)
// Space Complexity: O(I)

function URLify(string) {
  for (var i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      string = string.slice(0,i) + "%20" + string.slice(i+1)
    }
  }
  return string
}

// console.log(URLify("Mr John Smith"))


// //////////////////////////////////// //
// ---------- 1.4 PALINDROME ---------- //
// //////////////////////////////////// //

// EXAMPLES:
//     1. Input: "Tact Coa" // odd # = one letter can be non duplicate
//        Outut: true
//     2. Input: "Tact Ca"  // even # = no letter can be non duplicate
//        Output: true
//     3. Input: "Tactt Coa" // "t" is visible three times
//        Output: false
//     4. Input: "Tactt "

// PROBLEMS:
//     1. Eliminate spaces
//     2. Convert all strings to lowercase

/*

{
  t: 3,
  a: 2,
  c: 2,
  o: 1
}

*/

// SOLUTION:
//     After converting string to a new string of all lowercase / no spaces
//     We will iterate through each letter, and...
//         1. add object[letter]
//         2. count++ if !object[letter]
//               else count--;
//     At end if string.length % 2 !== 0, return true if count === 0
//         else return true if count === 1
//     Otherwise, return false

// RUNTIME: O(A + B) + O(I) = O(N)
// SPACE COMPLEXITY: O(N)

// TO FUTHER IMPROVE: implement count functionality during the initial iteration.

function PalindromePermutation(string) {
  const letters = string.split(" ").join("").toLowerCase(); // O(A)
  var check_table = {};
  var non_dup_count = 0;
  
  for (let i = 0; i < letters.length; i++) { // O(A)
    var letter = letters[i];
    if (!check_table[letter]) {
      check_table[letter] = 1;
    } else {
      check_table[letter]++;
    }
  }

  const repeat_count = Object.values(check_table);

  for (let i = 0; i < repeat_count.length; i++) { // O(B)
    if (repeat_count[i] % 2 !== 0) {
      non_dup_count++;
    }
  }

  if (letters.length % 2 === 0 && non_dup_count === 0) { // O(I)
    return true;
  } else if (letters.length % 2 !== 0 && non_dup_count < 2) {
    return true;
  }

  return false;

}

// console.log(PalindromePermutation("Tact Cta"))

// //////////////////////////////////// //
// ----------- 1.5 ONE AWAY ----------- //
// //////////////////////////////////// //

// EXAMPLE : 
//     1. input: "pale", "ple"
//        output: true
//     2. input: "pale", "bale"
//        ouput: true
//     3. input: "pale", "bake"
//        ouput: false


/*
  {
    p: 1,
    a: 0,
    l: 1,
    e: 0,
    b: 1,
    k: 1
  }
  
  count = 3;

  {
    p: 1,
    a: 0,
    l: 0,
    e: 0,
    b: 1
  }

  count = 2

  {
    p: 0,
    a: 1,
    l: 0,
    e: 0
  }

  count = 1

  if count < 3 => true

*/

// SOLUTION
//     Iterate through both strings and either:
//         set key[letter] = 1;
//         or key[letter]-- if already exists
//     At end add up all values and check:
//         if values < 3, return truel
//         otherwise, return false

function OneAway(s1, s2) {
  var letters = {};

  for (var i = 0; i < s1.length; i++) {
    var letter = s1[i];
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter]--;
    }
  }

  for (var i = 0; i < s2.length; i++) {
    var letter = s2[i];
    if (!letters[letter]) {
      letters[letter] = 1;
    } else {
      letters[letter]--;
    }
  }

  const values = Object.values(letters);
  var count = 0;

  for (var i = 0; i < values.length; i++) {
    count += values[i]
  }

  if(count < 3) {
    return true;
  }
  return false;
}


// console.log(OneAway('pale', 'pal'))


// ////////////////////////////////////////////// //
// ----------- 1.6 STRING COMPRESSION ----------- //
// ///////////////////////////////////////////// //

// QUESTION: If we were to get "Aa" for example, would that equate to A1a1? or a2? a2

function StringCompression(string) {
  var comp_str = "";
  var count = 1;

  for (var i = 0; i < string.length - 1; i++) {
    var letter = string[i].toLowerCase();
    var next_letter = string[i+1].toLowerCase();

    if (letter === next_letter) {
      count++;
    } else {
      comp_str += letter + count;
      count = 1;
    }
  }

  if (comp_str.length > string.length) {
    return string;
  } else {
    return comp_str;
  };
};

// console.log(StringCompression('aabcccccaaa'))
// console.log(StringCompression('abcdef'))


// ///////////////////////////////////////// //
// ----------- 1.7 ROTATE MATRIX ----------- //
// ////////////////////////////////////////  //

var matrix = 
[ [0, 1, 2, 3, 4], // 0
  [0, 1, 2, 3, 4], // 1
  [0, 1, 2, 3, 4], // 2
  [0, 1, 2, 3, 4], // 3
  [0, 1, 2, 3, 4] ]// 4

function rotateMatrix(matrix) {
  if (!matrix || matrix.length === 0 || matrix[0].length !== matrix.length) {
    throw new Error('invalid matrix')
  }

  if (matrix.length < 2) {
    return matrix;
  }

  let len = matrix.length - 1,
    mid = Math.floor(matrix.length / 2);

  // loop through diagonal
  for (let start = 0; start < mid; start++) {

    // loop through x-axis
    for (let i = 0; i < len - (start * 2); i++) {
      let y = start,
        x = start + i,
        prev = matrix[y][x];

      // loop through 4 corners
      for (let j = 0; j < 4; j++) {
        let nextY = x,
          nextX = len - y,
          next = matrix[nextY][nextX];

        matrix[nextY][nextX] = prev;
        prev = next;
        x = nextX;
        y = nextY;
      }
    }
  }

  return matrix;
}

// console.log('******* ORIGINAL *******')
// console.log(matrix);
// console.log('******* ROTATED *******')
// console.log(rotateMatrix(matrix))


// ////////////////////////////////////////////// //
// --------------- 1.8 ZERO MATRIX -------------- //
// /////////////////////////////////////////////  //
var matrix1 = 
[ [0, 1, 1, 1, 1], // 0
  [1, 1, 1, 1, 1], // 1
  [1, 1, 1, 0, 1], // 2
  [1, 1, 1, 1, 0] ]// 3

function zeroMatrix(matrix) {

  if (!matrix) {
    throw new Error("invalid matrix")
  }

  let rows = [],
    columns = []

  // loop thorugh y-axis
  for (let i = 0; i < matrix.length; i++) {
    // loop through x-axis
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        columns.push(j);
      }
    }
  }

  // loop through rows
  for (let i = 0; i < rows.length; i++) {
    let row = rows[i]; // 0, 2

    //loop through each row to reset to 0
    for (let x = 0; x < matrix[i].length; x++) {
      matrix[row][x] = 0;
    }
  }

  // loop through columns
  for (let i = 0; i < columns.length; i++) {
    let column = columns[i] // 0, 3

    //loop through each column to reset to 0
    for (let y = 0; y < matrix.length; y++) {
      matrix[y][column] = 0;
    }
  }

  return matrix;
}

// console.log(zeroMatrix(matrix1))



// ////////////////////////////////////////////// //
// ------------- 1.9 STRING ROTATION ------------- //
// /////////////////////////////////////////////  //
const s1 = "erbottlewat"
const s2 = "waterbottle"

function stringRotation(s1, s2) {
  if (!s1 || !s2) {
    throw new Error("invalid strings")
  }

  if (s1.length !== s2.length) {
    return false;
  }

  return isSubstring(s1+s1, s2);
}

function isSubstring(s1, s2) {
  return s1.includes(s2)
}

// console.log(stringRotation(s1, s2))

