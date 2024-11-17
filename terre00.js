// Alphabet
const characterA = 97
const output = new Array(25)

for (let i = 0; i <= 25; i++) {
    output[i] = String.fromCharCode(characterA + i)
}

console.log(output.join(""))
