// Trouver la suisse
const args = process.argv.slice(2)

if (args.length != 3) {
    console.log("Usage: node terre12.js <number> <number> <number>")
    process.exit(1)
}

const numbers = new Array(args.length)
for (let i = 0; i < args.length; i++) {
    const num = parseInt(args[i])
    if (isNaN(num)) {
        console.log(`'${args[i]}' is not a valid number.`)
        process.exit(1)
    }
    numbers[i] = num
}

function maxBetween(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

function minBetween(a, b) {
    if (a < b) {
        return a
    } else {
        return b
    }
}

const maxFirstPair = maxBetween(numbers[0], numbers[1])
const maxLastPair = maxBetween(numbers[1], numbers[2])
const middle = minBetween(maxFirstPair, maxLastPair)

console.log(middle)
