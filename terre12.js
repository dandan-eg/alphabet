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


let middle = numbers[0]

if (middle > numbers[1]) {
    middle = numbers[1]
}

if (middle > middle) {
    middle = numbers[2]
}


console.log(middle)
