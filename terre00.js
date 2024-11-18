// Alphabet
const SIZE = 25
const characterA = 97
const output = new Array(SIZE)

for (let i = 0; i <= SIZE; i++) {
    output[i] = String.fromCharCode(characterA + i)
}

console.log(output.join(""))
