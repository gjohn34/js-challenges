/*
Find Last Index
Iterate through an array in reverse, returning the index closest
to the end where the predicate truth test passes.

Try adding some tests.
One example could be what if the object is not found in the array
at all.

Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Matthew', 'last': 'McConaughey'},
             {'id': 4, 'name': 'Kanye', 'last': 'West'}];
_.findLastIndex(users, {
  name: 'Kanye'
});
=> 3
*/

const findLastIndex = (array, needle) => {
  let reversedArray = array.reverse()
  let result = null
  reversedArray.forEach(function(element) {
    if (result == null) {
      for (key in element) {
        let obj = {}
        obj[key] = element[key]
        if (key == Object.keys(needle)[0] && obj[key] == needle[Object.keys(needle)[0]]) {
          result = (array.length -1) - reversedArray.indexOf(element)
        }
      }
    }
  })
  return result
}


// Check your solution by running these tests: mocha last_index.js
const assert = require('assert');

describe('Find Last Index', () => {
  it('finds the last index', () => {
    const objects = [
      {a: 0, b: 0},
      {a: 1, b: 1},
      {a: 2, b: 2},
      {a: 0, b: 0}
    ];
    const result = findLastIndex(objects, {a: 0});
    assert.equal(result, 3);
  })
  it('returns null for no object', () => {
    const objects = [];
    const result = findLastIndex(objects, {a: 0});
    assert.equal(result, null);
  })
});
