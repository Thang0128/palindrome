const assert = require('assert');
function test_wordRule(){
  const wordRule = require('./regex.js');

  //string has atleast 2 character
  assert.notEqual(wordRule("to"), null);
  //string needs to be a alphabat
  assert.equal(wordRule("他他"), null);
  //no numbers
  assert.equal(wordRule("12345"), null);
  //no space
  assert.equal(wordRule("    "), null);
  //nothing at all
  assert.equal(wordRule(""), null);
  //fails less than two aplhabat char
  assert.equal(wordRule("q"), null);
  //2 char, but one is different from alphabat
  assert.equal(wordRule("q@"), null);
}

test_wordRule();
