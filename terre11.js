// 12 to 24
const args = process.argv.slice(2)
if (args.length != 1) {
    console.log("Usage: node terre11.js <time>");
    process.exit(1);
}

const arg = args[0]
if (arg.length != 7) {
    console.log("invalid format must be: hh:mmAM or hh:mmPM");
    process.exit(1);
}

let hours = parseInt(arg.substring(0, 2));
const minutes = parseInt(arg.substring(3, 5));
const separator = arg[2];
const period = arg.substring(5, 7);

if (isNaN(hours) || separator != ":" || isNaN(minutes)) {
    console.log("invalid format must be: hh:mmAM or hh:mmPM");
    process.exit(1);
}

if (minutes < 0 || minutes > 59) {
    console.log("minutes must be between 0 and 59")
    process.exit(1)
}

if (hours < 0 || hours > 12) {
    console.log("hours must be between 00:00 and 12:59")
    process.exit(1)
}

if (period === "AM") {
    if (hours === 12) {
        hours = 0; // Minuit
    }
} else if (period === "PM") {
    if (hours !== 12) {
        hours += 12; // Après-midi/soir
    }
} else {
    console.log("Invalid period. Must be AM or PM");
    process.exit(1);
}

if (hours > 10) {
    if (minutes > 10) {
        console.log(`${hours}:${minutes}`)
    } else {
        console.log(`${hours}:0${minutes}`)
    }
} else {
    if (minutes > 10) {
        console.log(`0${hours}:${minutes}`)
    } else {
        console.log(`0${hours}:0${minutes}`)
    }
}

