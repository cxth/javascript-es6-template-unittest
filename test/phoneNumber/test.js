import { assert } from 'chai'; // remember this should be enclosed by single quotes
import { createPhoneNumber2 } from '../../modules/phone_number.js';

describe("Create Phone Number", ()=>{

  it("Fixed tests", () => {
		assert.strictEqual(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
    assert.strictEqual(createPhoneNumber2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111");
    assert.strictEqual(createPhoneNumber2([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
  });

})

