let colorpicker = document.querySelector("#colorpicker")
let rektangel = document.querySelector("#rektangel")

rektangel.style.backgroundColor = "hotpink"


colorPicker.addEventListener("change", colorChanger(event))

function colorChanger(event){
    let color = e.target.value;
    console.log(color)
    rektangel.style.backgroundColor = color
}

