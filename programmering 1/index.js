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
text.innerHTML = `${name} är ${age} är gammal`