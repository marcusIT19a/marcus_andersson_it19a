let p_talserie1 = document.querySelector("#talserie1")
let p_talserie2 = document.querySelector("#talserie2")
let p_summa = document.querySelector("#summa")
let p_klass = document.querySelector("#klass")
let summa = 0

for (let i=1; i<=10; i++){
    p_talserie1.innerHTML += `${i} `
}

for (let j=10; j>=0; j--){
    p_talserie2.innerHTML += `${j} `
}

for (let i = 0; i<10; i++){
    console.log(`${i}. I will not write all over the walls`)
}

// vill räkna ut summan 1+2+3+...+8+9+10
for (let i=0; i<=10; i++){
    summa += i
}
p_summa.innerHTML += `1 + 2 +3 +...+9+10 = ${summa}`


// skapa en lista med elever
let elever = ["Kokchun", "Henrik", "Thomas", "tatiana", "zsofia", "David"]

p_klass.innerHTML = "klass IT19A <br/>"

for (let k = 0; k < elever.length; k++){
p_klass.innerHTML += `${k+1}. ${elever [k]} <br/>`}

