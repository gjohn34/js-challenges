function uniqueString(array) {
  //initializing arrays to be used later
  let unique = []
  let regex = []
  //turning each element in the array to lower case and
  // removing any dublicate values to create unique elements
  let lcArray = array.map((element) => {return element.toLowerCase()})
  lcArray.forEach(function(element) {
    unique.push(element.split('').filter(onlyUnique))
  })
  //then creating a regexp based on the first element in our unique array
  for (let i = 0; i < unique[0].length; i++) {
    regex.push(unique[0][i])
  }
  let reg = new RegExp(`[${regex.join('')}]`)
  //iterating through the unique array, we check if each element matches
  //the regexp we created from the first element of the array.

  //if the number of matches is greater than 0, we know that the first instance
  //meets the pattern of the other elements and when we find an element that
  //doesn't match we return that value from the initial array as that is the
  //element that is different from the rest.

  //if the number of matches is less than 0, we know that the first element
  //was the element that was different from the rest.
  let nMatches = 0
  let position = null
  let length = unique[0].length
  for (let i = 0; i < unique.length; i++) {
    if (reg.test(unique[i]) && unique[i].length == length) {
      nMatches++
    } else {
       nMatches--
      position = i
    }
  }
  console.log(`nMatches: ${nMatches}, position: ${position}, length: ${length}`);
  console.log(`Is Matches greater than 0? ${nMatches > 0}`);
  return (nMatches > 0) ? array[position] : array[0]
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function matches(currentValue, regularExpression) {
  return regularExpression.test(currentValue)
}


const assert = require('assert')

describe('Unique string challenge', function() {
    it('Should return the unique string', function() {
        assert.deepEqual(uniqueString([ 'aa', 'AaA', 'aaaa', 'bBbB', 'aAaA', 'a']), 'bBbB')
        assert.deepEqual(uniqueString(['kios', 'foo', 'ikos', 'ikso', 'kois', 'kiso']), 'foo')
        assert.deepEqual(uniqueString(['abc', ' ', '  ']), 'abc')
    })
})
