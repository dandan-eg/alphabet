// L'alphabet à partir de

if (process.argv.length <= 2) {
    console.log("Usage: node terre03.js <letter>")
    process.exit(1)
}

const arg = process.argv[2]
if (arg.length > 1) {
    console.log(`Expected a lowercase letter got=${arg}`)
    process.exit(1)
}

const char = arg.charCodeAt(0)
const characterA = 97
const characterZ = 122

if (char < characterA || char > characterZ) {
    console.log(`Expected a lowercase letter got=${arg}`)
    process.exit(1)
}

const length = characterZ - char
const output = new Array(length)

for (let i = 0; i <= length; i++) {
    output[i] = String.fromCharCode(char + i)
}


console.log(output.join(""))
