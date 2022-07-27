import { assert } from 'chai'; // remember this should be enclosed by single quotes
import { maxSequence } from '../../modules/max_sequence';

describe("maxSequence", ()=>{

  it("should work on an empty array",function(){
    Test.assertEquals(maxSequence([]), 0);
  });
  it("should work on the example",function(){
    Test.assertEquals(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });

})

