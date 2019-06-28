// Reverse bytes

// A stream of data is received and needs to be reversed.

// Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

  // 11111111  00000000  00001111  10101010
//     (byte1)(byte2)(byte3)(byte4)
// should become:

// 10101010  00001111  00000000  11111111
//   (byte4)(byte3)(byte2)(byte1)
// The total number of bits will always be a multiple of 8.

// The data is given in an array as such:

// [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]

function reverseBytes(data) {
	let bitstrings = []
	//return empty array if input it empty
	if (data.length == 0) {
		return []
	}

	//for every interval of 8 bits, split the array into separate arrays
	for (let i = 0; i != data.length / 8; i++) {
		bitstrings.push(data.slice(i*8, (i+1)*8))
	}

	let final = []
	bitstrings.map((item) => {final.unshift(item)})
	return final.reduce(function(a,b) {return a.concat(b)})
}

let assert = require("assert")

describe("reverseBytes", () => {
	context("With empty input", () => {
		it("should return an empty array with empty input", () => {
			assert.deepEqual(reverseBytes([]), [])
		})
	})
	context("with input", () => {
		it("should return [0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1] for [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]", () => {
			assert.deepEqual(reverseBytes([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0]), [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				1,
				1,
				1,
				1,
				1,
				1,
				1
			])
		})
		it("should return [1,1,1,1,0,0,0,0, 0,0,0,0,1,1,1,1] for [0,0,0,0,1,1,1,1, 1,1,1,1,0,0,0,0]", () => {
			assert.deepEqual(reverseBytes([0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0]), [
				1,
				1,
				1,
				1,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				1,
				1,
				1,
				1
			])
		})
		it("should return [0,0,0,0,0,0,0,0, 1,1,0,0,1.1,0,0, 0,0,0,1,0,1,1,1] for [0,0,0,1,0,1,1,1, 1,1,0,0,1.1,0,0, 0,0,0,0,0,0,0,0]", () => {
			assert.deepEqual(
				reverseBytes([0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
				[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1]
			)
		})
	})
})
