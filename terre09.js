// Nombre premier
if (process.argv.length <= 2) {
    console.log("Usage: terre09.js <number>")
    process.exit(1)
}

const arg = process.argv[2]
const number = parseInt(arg)

if (isNaN(number)) {
    console.log(`Expected a number got=${arg}`)
    process.exit(1)
}

if (number < 2) {
    console.log(`Non, ${number} n'est pas un nombre premier.`)
} else {
    for (let i = 2; i < number / 2; i++) {
        if (number % i == 0) {

            console.log(`Non, ${number} n'est pas un nombre premier. ${number}/${i}=${number / i}`)
            process.exit(0)
        }
    }
    console.log(`Oui, ${number} est un nombre premier.`)
}
