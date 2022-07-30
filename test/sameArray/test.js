import { assert } from 'chai'; // remember this should be enclosed by single quotes
import { same2 } from '../../modules/same_array.js';

describe("Test", ()=>{

  it("Basic tests", () => {
    assert.equal(same2([1,2,3], [4,1,9]), true, "true");
    assert.equal(same2([1,2,3], [1,9]), false,  "false");
		assert.equal(same2([1,2,1], [4,4,1]), false, "false");
  });

})

