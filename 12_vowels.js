/*
Vowels

Write a method that will take a string and
return an array of vowels used in that string.

Example:
count_vowels("The quick brown fox") should return ["e","u","i","o","o"]
count_vowels("Hello World") should return ["e","o","o"]

Check your solution by running the tests:
mocha 12_vowels.js
*/
function vowels(string) {
  let regex1 = RegExp('[aeiouAEIOU]','g');
  let array1;
  let array2 = []
  while ((array1 = regex1.exec(string)) !== null) {
    array2.push(array1[0])
  }

  return array2
}



var assert = require('assert');

describe('vowels', function() {
    it('Should return the vowels from a string', function() {
        assert.deepEqual(vowels("The quick brown fox"), ["e","u","i","o","o"]);
        assert.deepEqual(vowels("Hello World"), ["e","o","o"]);
    })
    it('Test vowels casing', function() {
        assert.deepEqual(vowels("cAse tEst"), ["A","e","E"])
    })
})
