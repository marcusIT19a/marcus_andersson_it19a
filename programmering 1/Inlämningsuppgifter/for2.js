let p_ämnen = document.querySelector("#ämnen")

let ämnen = ["Svenska", "Engelska", "Programmering", "Matematik", "Idrott"]

p_ämnen.innerHTML = "Ämnen <br/>"

for (let k = 0; k < ämnen.length; k++){
p_ämnen.innerHTML += `${k+1}. ${ämnen [k]} <br/>`}