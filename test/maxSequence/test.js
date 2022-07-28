import { assert } from 'chai'; // remember this should be enclosed by single quotes
import { maxSequence } from '../../modules/max_sequence.js';

describe("maxSequence", ()=>{

  it("should work on an empty array",function(){
    assert.strictEqual(maxSequence([]), 0);
  });
  it("should work on the all mixed",function(){
    assert.strictEqual(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });
  it("should work on the all negative",function(){
    assert.strictEqual(maxSequence([-1,- 4, -2, -1, -4]), 0);
  });

})

