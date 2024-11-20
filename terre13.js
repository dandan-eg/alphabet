// trié ou pas
const args = process.argv.slice(2)

if (args.length <= 1) {
    console.log("Usage: node terre13.js number number [...]")
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

function isSorted(arr) {
    for (let current = 0; current < arr.length - 1; current++) {
        const next = current + 1
        if (arr[current] > arr[next]) {
            return false
        }
    }
    return true
}

if (isSorted(numbers)) {
    console.log("trié")
} else {
    console.log("pas trié")
}
