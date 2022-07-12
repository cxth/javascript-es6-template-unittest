/**
 * Description.
 * Define a function that takes an integer argument and returns a logical value true or false
 * depending on if the integer is prime
 * 
 * Prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
 * link: https://www.codewars.com/kata/5262119038c0985a5b00029f/solutions
 * 
 * @param {*} num 
 * @returns boolean
 */
export function isPrime2(num) {

  if (num < 2) {
    return false;
  }

  let inum = num;
  if (num > 4) {
    let inum = Math.sqrt(num); 
  }

  let prime = true;
  for (let i = 2; i < inum; i++) {
    if (num % i === 0) {
      prime = false;
      break;
    }
  }
  return prime;
  
}

// most elegant solution
export function isPrime(num) {
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) {
      return false;
    }
  }
  return num > 1
}
