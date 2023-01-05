import { assert } from 'chai'; // remember this should be enclosed by single quotes
import { decode_roman_numeral } from '../../modules/roman_numerals_decoder.js';

describe('Test', () => {
  it('Basic tests', () => {
    assert.equal(decode_roman_numeral('XXI'), 21, 'true');
    assert.equal(decode_roman_numeral('I'), 1, 'true');
    assert.equal(decode_roman_numeral('IV'), 4, 'true');
    assert.equal(decode_roman_numeral('MMVIII'), 2008, 'true');
    assert.equal(decode_roman_numeral('MDCLXVI'), 1666, 'true');
    assert.equal(decode_roman_numeral('CDXIX'), 419, 'true');
  });
});
