import { assert } from 'chai';
import { get_multiples } from '../../module.js';

function test(n, expected) {
  const actual = get_multiples(n);
  it(`Expected ${expected}, got ${actual}`, () => {
    assert.strictEqual(actual, expected);
  });
}

describe('basic test', () => {
  test(10, 23);
});
