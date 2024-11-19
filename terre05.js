// Divisions
const args = process.argv.slice(2)
if (args.length != 2) {
    console.log("Usage: node terre05.js <number1> <number2>")
    process.exit(1)
}

const arg1 = args[0]
const arg2 = args[1]
const number1 = parseInt(arg1)
const number2 = parseInt(arg2)

if (isNaN(number1)) {
    console.log(`Expected a valid number got=${arg1}`)
    process.exit(1)
}

if (isNaN(number2)) {
    console.log(`Expected a valid number got=${arg2}`)
    process.exit(1)
}

if (number2 == 0) {
    console.log("Cannot divide by 0")
    process.exit(1)
}

if (number1 < number2) {
    console.log("Second argument must be lower than the first")
    process.exit(1)
}

console.log(`résultat: ${Math.floor(number1 / number2)}`)
console.log(`reste: ${Math.round(number1 % number2)}`)
