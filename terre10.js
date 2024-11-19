// 24 to 12
const args = process.argv.slice(2)

if (args.length != 1) {
    console.log("Usage: terre10.js <time>")
    process.exit(1)
}

const arg = args[0]
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

if (minutes < 0 || minutes > 59) {
    console.log("minutes must be between 0 and 59")
    process.exit(1)
}


if (hours < 0 || hours > 23) {
    console.log("hours must be between 00:00 and 23:59")
    process.exit(1)
}

let period;
if (hours == 12) {
    period = "PM"
} else if (hours > 12) {
    period = "PM"
    hours -= 12
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


