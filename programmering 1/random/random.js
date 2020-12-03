console.log("bog")
let slumptal = Math.random()

console.log(slumptal)

let coinflip = Math.round(slumptal)

console.log(`coin flip ${coinflip}`)

/*utöka det här programmet så att en 0 skriver ut tales och en 1 skriver ut heads */

if (coinflip == 0) {
    console.log("Tales")
 } else if (coinflip == 1){ 
         console.log("Heads")
     }

document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 15) + 1;

console.log(`Antalet sexor är: ${sexor}`)¨

let andel = sexor/1000000
console.log(andel)
console.log(`Teoretisk sannolikhet ${1/6}`)