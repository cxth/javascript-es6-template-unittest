import { assert } from 'chai'; // remember this should be enclosed by single quotes
import { same4 } from '../../modules/same_array.js';

describe("Test", ()=>{

  it("Basic tests", () => {
    assert.equal(same4([1,2,3], [4,1,9]), true, "true");
    assert.equal(same4([1,2,3], [1,9]), false,  "false");
		assert.equal(same4([1,2,1], [4,4,1]), false, "false - must be same frequency");
    assert.equal(same4([3,4,5,3], [25,9,9,16]), true, "true");
  });

})

