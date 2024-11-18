// Nom du programme

// Tentative n°1
const path = __filename

let slashIndex = path.length - 1;
while (path[slashIndex] !== '/' && slashIndex > 0) {
    slashIndex--
}

const programName = path.substring(slashIndex + 1, path.length)
console.log(programName)

// Tentative n° 2

import { basename } from 'path';

const programName2 = basename(__filename);

console.log(programName2);
