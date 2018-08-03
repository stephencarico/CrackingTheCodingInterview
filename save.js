function englishInt(number) {
  var result = ''
  var zero = {
    '0': 'Zero',
    '1': 'One',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': 'Seven',
    '8': 'Eight',
    '9': 'Nine'
  }

  var one = {
    '1': {
      '1': 'Eleven',
      '2': 'Twelve',
      '3': 'Thirteen',
      '4': 'Fourteen',
      '5': 'Fifteen',
      '6': 'Sixteen',
      '7': 'Seventeen',
      '8': 'Eighteen',
      '9': 'Nineteen'
    },
    '2': 'Twenty',
    '3': 'Thirty',
    '4': 'Forty',
    '5': 'Fifty',
    '6': 'Sixty',
    '7': 'Seventy',
    '8': 'Eighty',
    '9': 'Ninety'
  }

  var numArr = number.toString().split('').reverse()
  let hundreds = [];
  let thousands = [];
  let millions = [];

  for (let i = 0; i < numArr.length; i++) {
    if (i < 3) {
      hundreds.push(numArr[i])
    }
    if (i < 6 && i >= 3) {
      thousands.push(numArr[i])
    }
    if (i < 9 && i >= 6) {
      millions.push(numArr[i])
    }
  }
  console.log(hundreds)
  // console.log(one[hundreds[1]][hundreds[2]])


  for (var i = 0; i < hundreds.length; i++) {
    if (i === 0) {
      if (one[hundreds[i+1]] === '1') {
        continue;
      } else {
        result = zero[hundreds[i]] + " " + result
      }
    } else if (i === 1) {
      if (one[hundreds[i]] === '1') {
        result = one[hundreds[i]]['1'] + " " + result
      } else {
        result = one[hundreds[i]] + " " + result
      }
    } else {
      result = zero[hundreds[i]] + ' Hundred ' + result;
    }
  }

  for (var i = 0; i < thousands.length; i++) {
    if (i === 0) {
      result = zero[thousands[i]] + " Thousand, " + result
    } else if (i === 1) {
      result = one[thousands[i]] + " " + result
    } else {
      result = zero[thousands[i]] + ' Hundred ' + result;
    }
  }

  for (var i = 0; i < millions.length; i++) {
    if (i === 0) {
      result = zero[millions[i]] + " Million, " + result
    } else if (i === 1) {
      result = one[millions[i]] + " " + result
    } else {
      result = zero[millions[i]] + ' Hundred ' + result;
    }
  }

  return result;
}

// TEST

let test1 = 211
let test2 = 1234 // [1,2,3,4] => [[4,3,2], [1]] => while (num !== null)
// => ['one'] if i === 0, => ['four'], ['thirty'] if i === 1, 
// => [four] if i === 2
// ! append 'hundred' at 
let test3 = 123456789
let test4 = 0

console.log(englishInt(test1))
// console.log(englishInt(test2))
// console.log(englishInt(test3))


// consider: 10, 11, 12, 13, 14, 15

// problem 1: how do we break up number to pairs of three?
// problem 2: how will we iterate and concat to return string?
// problem 3: how will we differentiate where the pairs are located? hundreds, thousands, millions, etc.
// problem 4: what if there's a zero?
