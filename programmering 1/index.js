let name = "marcus"
let age = 16
console.log(`hej ${name} du är ${age} år gammal`) 

// if-sats - att göra val
if (age >= 18){
    console.log("du är vuxen")
}else{
    console.log("du är ett barn")
}

// DOM - Document Object Model
let text = document.querySelector("#text")
text.innerHTML = `${name} är ${age} år gammal`

let mult = document.querySelector("#multiplikation")
let div = document.querySelector("#division")
let add = document.querySelector("#addition")
let sub = document.querySelector("#subtraktion")

mult.innerHTML = `multiplikation`
div.innerHTML = `division`
add.innerHTML = `addition`
sub.innerHTML = `subtraktion`

let button = document.querySelector("#knapp")

button.addEventListener("click" , math)

function math(event){
    console.log("math-functionen körs")
}
