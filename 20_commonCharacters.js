/*
Write code which will return the common characters found in
two different strings. You should only need to return the
characters once.

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""

*/

const commonCharacters = (string1, string2) => {
  let array1 = string1.split('').filter(onlyUnique)
  let array2 = string2.split('').filter(onlyUnique)
  let common = []
  array1.forEach(function(item) {
    if (array2.includes(item)) {
      common.push(item)
    }
  })
  return (common.length != 0) ? common.join('') : "\'\'"
}

function onlyUnique(value, index, self) {
  regexp = /[a-z]/
  if (regexp.test(value)) {
    return self.indexOf(value) === index;
  }
}

console.log(commonCharacters('aabc', 'abc'))
console.log(commonCharacters("What is love?", "Baby don't hurt me"))
console.log(commonCharacters('Riding on a buffalo makes me more approachable', 'so what'))
console.log(commonCharacters('', ''))



// Your Code Should Pass:
// const chai = require('chai');
// const should = chai.should();
//
// describe('Common Characters', () => {
//     it('returns commons characters', () => {
//         commonCharacters('abc', 'abc').should.equal('abc')
//     })
//
//     it('returns common characters', () => {
//         commonCharacters("What is love?", "Baby don't hurt me").should.equal('hatoe')
//     })
//
//     it('returns common characters', () => {
//         commonCharacters('Riding on a buffalo makes me more approachable', 'so what').should.equal('oash')
//     })
//
//     it('returns empty string', () => {
//         commonCharacters('', 'No more').should.equal('')
//     })
//
//     it('returns empty string', () => {
//         commonCharacters('No more', '').should.equal('')
//     })
//
//     it('returns empty string', () => {
//         commonCharacters('', '').should.equal('')
//     })
// })
