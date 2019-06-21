// Good morning ladies and gents, do we have a treat for you today.
// For our bonus round morning challenge, I present to you, Conway's Game of Life!
// The rules are simple. You are presented with 2d array, containing 1's and 0's.
// 1's represent live cells, 0's represent dead cells.
// Your task is to find what the next generation of the 2d array looks like based on the following rules:
//     If a living cell has fewer than 2 neighbours, it dies.
//     If a living cell has 2 or 3 neighbours, it continues to live.
//     If a living cell has greater than 3 neighbours, it dies.
//     If a dead cell has exactly 3 neighbours, it comes to life.
// Good luck and have fun!

function conwaysGameOfLife(game) {
	let result = []
	game.forEach(function(outerValue, outerIndex) {
		let newArray = []
		let toplevel = outerIndex
		outerValue.forEach(function(innerValue, innerIndex) {
			let ones = 0
			let bottomlevel = innerIndex
			if (toplevel != 0) {
				//directly above
				if (game[toplevel-1][bottomlevel] == 1) {
					ones++
				}
				//above left
				if (game[toplevel-1][bottomlevel-1] == 1) {
					ones++
				}
				if (game[toplevel-1][bottomlevel+1] == 1) {
					ones++
				}
			}
			if (toplevel < game.length-1) {
				//directly below
				if (game[toplevel+1][bottomlevel] == 1) {
					ones++
				}
				//below left
				if (game[toplevel+1][bottomlevel-1] == 1) {
					ones++
				}
				//below right
				if (game[toplevel+1][bottomlevel+1] == 1) {
					ones++
				}
			}
			//directly left
			if (bottomlevel != 0) {
				if (game[toplevel][bottomlevel-1]) {
					ones++
				}
			}
			//directly
			if (bottomlevel < outerValue.length-1) {
				if (game[toplevel][bottomlevel+1]) {
					ones++
				}
			}
			if (innerValue == 1) {
				if (ones < 2) {
					newArray.push(0)
				} else if (ones == 2 || ones == 3) {
					newArray.push(1)
				} else if (ones > 3) {
					newArray.push(0)
				}
			} else if (innerValue == 0) {
				if (ones == 3) {
					newArray.push(1)
				} else {
					newArray.push(0)
				}
			}
		})
		result.push(newArray)
	})
	return result;
}

//     If a living cell has fewer than 2 neighbours, it dies.
//     If a living cell has 2 or 3 neighbours, it continues to live.
//     If a living cell has greater than 3 neighbours, it dies.
//     If a dead cell has exactly 3 neighbours, it comes to life.
// Good luck and have fun!

let assert = require("assert")

describe("Conway's Game Of Life", function() {
	context("Testing One Generation", function() {
		it("Should correctly return the next generation of the game", function() {
			let game = [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 1, 0],
				[0, 1, 1, 0, 0],
				[0, 0, 1, 0, 1],
				[0, 0, 1, 0, 0]
			]
			assert.deepEqual(conwaysGameOfLife(game), [
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0],
				[0, 1, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 1, 0]
			])
		})
	})
})
