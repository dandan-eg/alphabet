// Inverser une chaîne
const args = process.argv.slice(2)

if (args.length != 1) {
    console.log("Usage: node terre06.js \"<sentence>\"")
    process.exit(1)
}

const sentence = args[0]
const output = new Array(sentence.length)

for (let i = 0; i < sentence.length; i++) {
    const oppositeIndex = (sentence.length - 1) - i
    output[oppositeIndex] = sentence[i]
}

console.log(output.join(""))
