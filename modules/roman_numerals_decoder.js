/**
 * Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
 *
 * Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately,
 * starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII).
 * The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
 * link: https://www.codewars.com/kata/51b6249c4612257ac0000005/train/javascript
 *
 * @param {*} number
 * @returns total | number
 */
export function decode_roman_numeral(roman) {
  // complete the solution by transforming the
  // string roman numeral into an integer

  // algo
  // 1. ForEach string and check if valid roman character
  //     Or by using a Regex
  // 2. Traverse, if a character is invalid return false
  // 3. If 3 < consecutive characters are the same, return false
  // 4. If current [i] is bigger than previous, deduct to [i], deduct prev to totalSum
  // 5. Add current to totalSum

  let prevValue = 0;
  let currentValue = 0;
  let totalSum = 0;
  let romanValidCharacters = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
  let romanValues = [1, 5, 10, 50, 100, 500, 1000];

  roman.split('').forEach((current, i) => {
    const value = romanValidCharacters.findIndex((obj) => {
      return obj === current;
    });

    currentValue = romanValues[value];
    totalSum += currentValue;

    if (currentValue > prevValue) {
      totalSum -= prevValue * 2;
    }

    prevValue = currentValue;
  });

  return totalSum;
}

export function decode_roman_numeral2(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split('');
  // Nice approach as array index mapped in data key however this has no validation
  var sum = 0,
    i;

  for (i = 0; i < numbers.length; i++) {
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  }

  return sum;
}
