/**
 * Description.
 * The maximum sum subarray problem consists in finding the maximum sum 
 * of a contiguous subsequence in an array or list of integers:
 * 
 * maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
 * // should be 6: [4, -1, 2, 1]
 *
 * Easy case is when the list is made up of only positive numbers 
 * and the maximum sum is the sum of the whole array. 
 * If the list is made up of only negative numbers, return 0 instead.
 *
 * Empty list is considered to have zero greatest sum. 
 * Note that the empty list or array is also a valid sublist/subarray.
 * 
 * @param {*} Array arr 
 * @returns int
 */
export function maxSequence(arr) {
  //return 0 if empty arr
  if (arr.length === 0) return 0

  //return sum if all positive
  const result = arr.filter((num) => {return num > 0})
  return (result.length == arr.length) ? arr.reduce((partialSum, a) => partialSum + a, 0) : checkNegative(arr)
}

function checkNegative(arr) {
  //return sum if all negative
  const result = arr.filter((num) => {return num < 0})
  return (result.length == arr.length) ? 0 : arrangeSequence(arr)
}

function arrangeSequence(arr) {
  // arrange Integers
  /**
   * algo:
   * iterate from start
   * find positve integer, iterate, get subset, stop if next n is negative, get sum
   */
   let super_set = []
   for (let i = 0; i <= arr.length; i++) {
      super_set.push(iterator(i, arr))
   }
   //console.log("the super max")
   //console.log(super_set)
   //console.log("the super set")
   return Math.max(...super_set)
}

function iterator(j, arr) {
  let set = []
  let total = 0
  let max = 0
  for (let i=j; i<arr.length; i++) {
    set.push(arr[i])
    //console.log(set)
    total = set.reduce((psum, a) => psum + a, 0)
    //if (max < total) {
      //console.log("the max set " + set)
      //console.log(max + "<" + total)
      //max = total
    //}
    max = (max < total) ? total : max
  }
  return max
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // should be 6: [4, -1, 2, 1]
console.log(maxSequence([1, 4, 2, 1, 4]))
console.log(maxSequence([-1,- 4, -2, -1, -4]))
console.log(maxSequence([]))
