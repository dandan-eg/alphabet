// Taille d'une chaine
const args = process.argv.slice(2)
if (args != 1) {
    console.log("Usage: node terre06.js \"<sentence>\"")
    process.exit(1)
}

const sentence = args[0]

let length = 0
while (sentence[length]) {
    length++
}

console.log(length)
