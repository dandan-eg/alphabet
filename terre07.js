// Taille d'une chaine
if (process.argv.length <= 2) {
    console.log("Usage: node terre06.js \"<sentence>\"")
    process.exit(1)
}

const sentence = process.argv[2]

let size = 0
while (sentence[size++]) { }

console.log(size)
