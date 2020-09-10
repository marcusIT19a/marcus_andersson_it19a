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
    let num1 = parseFloat(document.querySelector("number1").value)
    let num2 = parseFloat(document.querySelector("number2").value)

    add.innerHTML = `${num1}+${num2}=${num1+num2}`
}

// skapa en variabel name och tilldela det ditt namn
let name = "marcus"


//skriv ut "Hej namn"
console.log(`Hej ${name}`)

// 1. skapa variablerna tal1, tal2, tal3
// 2. tilldela dessa variabler med värderna 3,4,5
let tal1 = 3
let tal2 = 4
let tal3 = 5

// 3. räkna ut medelvärdet av dem 
medelvarde = (tal1+tal2+tal3)/3

// 4. Gör följande utskrift: 
//"Medelvärdet av talen 3,4,5 är 4" 
console.log(`(${tal1}+${tal2}+${tal3})/3 = ${medelvarde}`)

let langd = prompt("ange värdet för rektangelns längd ")


