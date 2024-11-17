// Pair ou impair

if (process.argv.length <= 2) {
    console.log("Usage: terre04.js <number>")
    process.exit(1)
}

const arg = process.argv[2]
const number = parseInt(arg)

if (isNaN(number)) {
    console.log(`Expected a valid number got=${arg}`)
    process.exit(1)
}

if (number % 2 === 0) {
    console.log("pair")
} else {
    console.log("impair")
}
