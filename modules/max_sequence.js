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
  //return 0 if all negative
  const result = arr.filter((num) => {return num < 0})
  return (result.length == arr.length) ? 0 : arrangeSequence(arr)
}

function arrangeSequence(arr) {
   let super_set = []
   for (let i = 0; i <= arr.length; i++) {
      super_set.push(iterator(i, arr))
   }
   return Math.max(...super_set)
}

function iterator(j, arr) {
  let set = []
  let total = 0
  let max = 0
  for (let i=j; i<arr.length; i++) {
    set.push(arr[i])
    total = set.reduce((psum, a) => psum + a, 0)
    if (max < total) max = total
  }
  return max
}

/**
 * 
  If you have a sequence of 8 numbers and the run of numbers from 3 - 6 gives the greatest sum, 
  that value is the same as the numbers 1 - 6 minus the numbers 1 - 2. 
  In the function shown above SUM is the current sum of numbers starting from the 0 index. 
  MIN is the running least sum starting from the 0 index. 
  ANS is the running highest difference between the two sets. 
  When the index is 6, the SUM, MIN and ANS values are shown below. 2 minus -4 = 6. 
  When the index is 7 or 8 the ANS value will not be any greater, so the final value returned is 6.

[-2, 1, -3, 4, -1, 2, 1, -5, 4] 0, 1, 2, 3, 4, 5, 6, 7, 8 SUM_2_ MIN-4_ _ANS_6
 */
function bestSolution(arr) {
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // should be 6: [4, -1, 2, 1]
//console.log(maxSequence([1, 4, 2, 1, 4])) // should be 12
//console.log(maxSequence([-1,- 4, -2, -1, -4])) // should be 0
//console.log(maxSequence([])) // should be 0
