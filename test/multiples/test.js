import { assert } from 'chai';
import { get_multiples } from '../../modules/multiples.js';

function test(n, expected) {
  const actual = get_multiples(n);
  it(`Expected ${expected}, got ${actual}`, () => {
    assert.strictEqual(actual, expected);
  });
}

describe('basic test', () => {
  test(10, 23);
});

describe("smallest cases", function() {
  test(-1,0)
  test(0,0)
  test(1,0)
  test(2,0)
  test(3,0)
  test(4,3)
  test(5,3)
  test(6,8)
})

describe("random cases", function() {
  
  function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function _solution(number){
    let sum = 0;
    
    for(let i = 1; i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
  }
  
  for(let i = 0; i < 100; i++) {
    let rand = randint(0, 10**randint(1, 5)) - 100
    test(rand, _solution(rand));
  }
})
