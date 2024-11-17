const path = __filename

let slashIndex = path.length - 1;
while (path[slashIndex] !== '/' && slashIndex > 0) {
    slashIndex--
}

const programName = path.substring(slashIndex + 1, path.length)
console.log(programName)

//const path = require('path');
//const programName = path.basename(__filename);
//
//console.log(programName);
