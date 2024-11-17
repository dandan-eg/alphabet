// Inverser une chaîne
if (process.argv.length <= 2) {
    console.log("Usage: node terre06.js \"<sentence>\"")
    process.exit(1)
}

const sentence = process.argv[2]
const output = new Array(sentence.length)

for (let i = 0; i < sentence.length; i++) {
    const oppositeIndex = (sentence.length - 1) - i
    output[oppositeIndex] = sentence[i]
}

console.log(output.join(""))
