/*

Working individually or in pairs write out differnt tests which will
count the number of even numbers in an array.

Try to have at least three different tests which test differnt values
put into your method, such as an empty array.

Once you have done done this, write out the method and check if it passes.

Example: countEvens = ([1,2,3,4]) => 2

Hint:
If your having trouble writing tests, look up some of the previous challenges or try
Google - mocha tests to get an idea.

*/

const countEvens = (array) => {
  result = null
  array.forEach(function(number) {
    if (number % 2 == 0) {
      result++
    }
  })
  return result
// Your code here
}

// Your tests here

var assert = require('assert');


describe('nOfEvenNumbers', function () {
    it('should return nEvens', function () {
        assert.equal(2, countEvens([2,3,4,5]));
        assert.equal(4, countEvens([1,2,5,6,7,9,10,20]))
    });
    it('should return null for empty array or strings', function () {
        assert.equal(null, countEvens([]));
        assert.equal(null, countEvens(['one', 'two', 'three']));

    });
    it('should return 0 if the array is odds', function () {
        assert.equal(null, countEvens([1,3,5,7,9]));
    });

});
