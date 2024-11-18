// 24 to 12
if (process.argv.length <= 2) {
    console.log("Usage: terre10.js <date>")
    process.exit(1)
}

const arg = process.argv[2]
if (arg.length != 5) {
    console.log("invalid format must be: hh:mm")
    process.exit(1)
}

let hours = parseInt(arg.substring(0, 2))
const separator = arg[2]
const minutes = parseInt(arg.substring(3, 5))

if (isNaN(hours) || separator != ":" || isNaN(minutes)) {
    console.log("invalid format must be: hh:mm")
    process.exit(1)
}

if (minutes < 0 || minutes > 60) {
    console.log("minutes must be between 0 and 60")
    process.exit(1)
}


if (hours < 0 || hours >= 24) {
    console.log("hours must be between 00:00 and 23:59")
    process.exit(1)
}

let period;
if (hours > 12) {
    hours -= 12
    period = "PM"
} else {
    period = "AM"
}

// Ajoute des zéros pour un bon affichage
if (hours < 10) {
    if (minutes < 10) {
        console.log(`0${hours}:0${minutes}${period}`)
    } else {
        console.log(`0${hours}:${minutes}${period}`)
    }
} else {
    if (minutes < 10) {
        console.log(`${hours}:0${minutes}${period}`)
    } else {
        console.log(`${hours}:${minutes}${period}`)
    }
}


