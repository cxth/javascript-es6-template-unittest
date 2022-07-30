/**
 * Description.
 * A function called same, which accept two arrays
 * The function should return true if every value in the array has it's
 * corresponding value squared in the second array. The frequency of values must be the same
 * 
 * URL: Frequency Control Pattern
 * 
 * @param {*} array, array 
 * @returns boolean
 */
 export function same(arr1, arr2) {
  
  let x = true
  arr1.some(val => {   
    //console.log(Math.pow(val,2)) 
    if (!arr2.includes(Math.pow(val,2))) {
      x = false
    }
  });

  return x  
}

// A Naive Solution - Time Complexity - N^2
export function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i=0; i<=arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

console.log(same2([1,2,1], [4,4,1]))
console.log(same2([1,2,3], [1,9]))
console.log(same2([1,2,1], [4,4,1]))