// Pair ou impair

const args = process.argv.slice(2)
if (args.length != 1) {
    console.log("Usage: terre04.js <number>")
    process.exit(1)
}

const number = parseInt(args[0])

if (isNaN(number)) {
    console.log(`Expected a valid number got=${arg}`)
    process.exit(1)
}

if (number % 2 === 0) {
    console.log("pair")
} else {
    console.log("impair")
}
