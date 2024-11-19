// Taille d'une chaine
const arguments = process.argv.slice(2)
if (arguments <= 2) {
    console.log("Usage: node terre06.js \"<sentence>\"")
    process.exit(1)
}

const sentence = process.argv[2]

let size = 0
while (sentence[size]) {
    size++
}

console.log(size)
