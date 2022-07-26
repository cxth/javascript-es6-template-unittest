/**
 * Description.
 * Write a function that accepts an array of 10 integers (between 0 and 9), 
 * that returns a string of those numbers in the form of a phone number.
 * 
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 * link: https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
 * 
 * @param {*} Array numbers 
 * @returns string
 */
export function createPhoneNumber(numbers) {
  
  numbers.splice(0, 0, "(")
  numbers.splice(4, 0, ")")
  numbers.splice(5, 0, " ")
  numbers.splice(9, 0, "-")
  return numbers.join('')  
}

// use as string
export function createPhoneNumber2(numbers) {
  let word = numbers.join('')
  return word.slice(0,0)+"("+word.slice(0,3)+")"+word.slice(4,4)+" "+word.slice(3,6)+"-"+word.slice(6)  
}

// clever solution
function createPhoneNumber3(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])