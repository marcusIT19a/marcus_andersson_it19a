console.log("While satser")
let h1_titel = document.querySelector("#titel");
let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")

// Skriv While-sats i titel
h1_titel.innerHTML = "While-Satser"


let n = 1

while (n <= 10){
    p_talserie1.innerHTML += `${n} `
    n++ // n ökar med 1
}

let k = 10

while (k >= -10){
    p_talserie2.innerHTML += `${k} `
    k-- // k minskar med 1
}



// skriv ut 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
// i webbläsaren

