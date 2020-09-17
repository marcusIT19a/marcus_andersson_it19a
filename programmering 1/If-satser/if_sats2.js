console.log("hej detta är if-sats")


// skriv ett program som låter användaren skriva in sin ålder. Programet ska avgöra om får kolla på en 15-årsgräns film på bio
// Utöka programmet till att kolla om användaren får titta på en 7-årsgräns film på bio
// Utöka programet till att kolla om användaren får kolla på en 18-årsgräns film på bio

let age = prompt("Hur gammal är du?")

if (age >= 7){
    console.log("Du får kolla på en 7-årsgräns film på bio")
} else {
    console.log ("Du får inte kolla på en 7-årsgräns film på bio")
}

if (age >= 15){
    console.log("Du får kolla på en 15-årsgräns film på bio")
} else {
    console.log ("Du får inte kolla på en 15-årsgräns film på bio")
}

if (age >= 18){
    console.log("Du får kolla på en 18-årsgräns film på bio")
} else {
    console.log ("Du får inte kolla på en 18-årsgräns film på bio")
}


let antal = prompt("Hur många gånger åker du spårvagn i månaden?")

if (antal >=28){
    console.log ("Du åker spårvagn mer än 28 gånger och det är värt att köpa månadskort")
} else{
    console.log ("Du åker spårvagn mindre änd 28 gånger och det är inte värt att köpa månadskort")
}




