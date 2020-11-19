console.log("hej qahba")

let textarea = document.querySelector("#textArea")
let countWordBtn = document.querySelector("#countWordBtn")

countWordBtn.addEventListener("click", countwords)

function countwords(){
    console.log("kör funktion countwords")
    let text = textArea.value
    console.log(text)
    let word = text.split("")
    console.log(words.lenght)
    p_displaywords.innerHTML = words.length
}


