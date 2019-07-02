// //Count the divisible numbers
// Problem Description: Write function divisibleCount(x, y, z) that takes in
// 3 numbers x, y and z, and returns the number // of integers within the
// range [x..y] that are divisible by z i.e.:
// For example:
// x = 6, y = 11 and z = 2, your function should return 3, because there are three numbers divisible by 2 within the
// range [6..11], namely 6, 8 and 10.

function solution(x,y,z) {
  let result = 0
  for (let i = x; x != y; x++) {
    if (x % z == 0) {
      result++
    }
  }
  return result
}

let assert = require('assert')

describe("divisible count", () => {
  context("no parameters", () => {
    it("should return all 0's with 0 input", () => {
      assert.equal(solution(0,0,0), 0)
    })
  })
  context('valid input', () => {
    it('should return 3', function () {
      assert.equal(solution(6, 11, 2), 3)
    });
  })
})
