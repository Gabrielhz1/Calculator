function addCharacter(caracter) {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay + caracter

}


function Clear() {
    document.querySelector(".display").value = ""
}

function calc() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = eval(valorDisplay)
}


function inverter() {
    const valorDisplay = document.querySelector(".display").value

    document.querySelector(".display").value = valorDisplay * -1
}
