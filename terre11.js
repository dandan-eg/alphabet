// 12 to 24

if (process.argv.length == 2) {
    console.log("Usage: node terre11.js <date>");
    process.exit(1);
}

const arg = process.argv[2]
if (arg.length != 7) {
    console.log("invalid format must be: hh:mm");
    process.exit(1);
}

let hours = parseInt(arg.substring(0, 2));
const minutes = parseInt(arg.substring(3, 5));
const separator = arg[2];
const period = arg.substring(5, 7);

if (isNaN(hours) || separator != ":" || isNaN(minutes)) {
    console.log("invalid format must be: hh:mm");
    process.exit(1);
}

if (minutes < 0 || minutes > 60) {
    console.log("minutes must be between 0 and 60")
    process.exit(1)
}

if (hours < 0 || hours >= 12) {
    console.log("hours must be between 00:00 and 11:59")
    process.exit(1)
}

if (period == "PM") {
    hours += 12;
} else if (period != "AM") {
    console.log("invalid period must be PM or AM");
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

