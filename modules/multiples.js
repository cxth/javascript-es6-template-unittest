/**
 * Description.
 * List all the natural numbers below {number} that are multiples of 3 or 5.
 * The sum of these multiples are 23.
 * link: https://www.codewars.com/kata/514b92a657cdc65150000006/solutions/javascript?filter=all&sort=best_practice
 * 
 * @param {*} number 
 * @returns total | number
 */
export function get_multiples(number) {
  let total = 0;
  for (let i = 1; i < number; i++) {
      total += (i % 3 === 0 || i % 5 === 0) ? i : 0;
  }
  return total;
}

export function get_multiples2(number) {
  /**
   * 1. check number if <= 0
   * 2. create an array containing 1...N
   * 
   *  Array.from({length: 10}, (_, i) => i + 1) // is used because it have conditional statement
   * 
   *  console.log(Array.from('foo'));
      // expected output: Array ["f", "o", "o"]

      console.log(Array.from([1, 2, 3], x => x + x));
      // expected output: Array [2, 4, 6]

      Other options:
      * Array.from(Array(10).keys())
      * [...Array(10).keys()]

   * 3. use Array.reduce()
        return the sum of all the elements in an array:
   */
  
  return number<=0?0:Array.from({length: number}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y);
}
