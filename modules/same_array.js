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
 // my solution - incorrect. Does not detect correct frequency
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

// A Naive Solution - Time Complexity - N^2 - from the tutorial
export function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i=0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    //console.log({correctIndex})
    if (correctIndex === -1) {
      return false
    }
    arr2.splice(correctIndex, 1)
  }
  return true
}

// Another try - well, this doesn't work
export function same3(arr1, arr2) {
  // get sum arr1, arr2
  return ((([...arr1, ...arr2].reduce((a, b) => a + b, 0)) - arr1.reduce((a, b) => a + b, 0)) === arr2.reduce((a, b) => a + b, 0))
}

/**
 * Rationale - frequency counter is to break nested loops O(n2) to linear 0(n), no matter how many loops to write
 * @param {*} arr1 
 * @param {*} arr2 
 * @returns 
 */
// the frequency counter
export function same4(arr1, arr2) {
  // check length
  if (arr1.length !== arr2.length) {
    return false
  }
  // build objects
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  console.log(frequencyCounter1) // arr[value] = n (frequency count)
  console.log(frequencyCounter2)
  //validate
  for (let key in frequencyCounter1) {
    // get key, squared then look for matching frequencyCounter key
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    // compare values with key as reference to check the frequency count
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}

// console.log(same4([1,2,3], [4,1,9]))
// console.log(same4([1,2,3], [1,9]))
// console.log(same4([1,2,1], [4,4,1]))
console.log(same4([3,4,5,3], [25,9,9,16]))