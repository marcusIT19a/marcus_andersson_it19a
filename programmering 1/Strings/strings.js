// konkatenering

let förnamn = "Marcus"
let efternamn = "Andersson"
let namn = förnamn + " " +  efternamn 
let adress = "Badviksvägen 42"
let telefon = "0707648538"
let alder = "17"

console.log("Namn: " + namn + "\n" + "Ålder: " + alder + "\n" + "Adress: " + adress + "\n" + "Telefon: " + telefon + "\n")

let p_uppgifter = document.querySelector("#Personuppgifter")
p_uppgifter.innerHTML = "Namn: " + namn + "<br>" + "Ålder: " + alder + "<br>" + "Adress: " + adress + "<br>" + "Telefon: " + telefon 

let alfabet = "abcdefghijklmnoprstuvwxyzåäö"
let bokstav = alfabet[0]
let bokstav = alfabet[4]

console.log(`Bokstav på index 0 är: ${bokstav1}`)
console.log(`Bokstav på index 4 är: ${bokstav5}`)


let antal_bokstaver = alfabet.length
console.log( `Antal bokstäver i alfabetet är ${antal_bokstaver}`)




