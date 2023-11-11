
const screen = document.querySelector("#screen")
const numBtns = document.querySelectorAll("button.num")
const oprBtns = document.querySelectorAll("button.opr")

const calcBtn = document.querySelector("button.calc")

let a = 0 
let operation = null
let b = 0

for(let i = 0; i < numBtns.length; i++) {
    const numBtn = numBtns[i]

    numBtn.addEventListener("click", function () {
        if (operation !== null) {
            b = b + numBtn.dataset.num
            screen.innerHTML = +b
        } else {
            a = a + numBtn.dataset.num
            screen.innerHTML = +a
        }
    })
}

for (let i = 0; i < oprBtns.length; i++) {
    const oprBtn = oprBtns[i]

    oprBtn.addEventListener("click", function() {
        operation = oprBtn.dataset.opr
    })
}


calcBtn.addEventListener("click", function(){
    switch(operation) {
        case "+":
            screen.innerHTML = a + b
            break
        case "-":
            screen.innerHTML = a - b
            break
        case "*":
            screen.innerHTML = a * b
            break
        case "/":
            screen.innerHTML = a / b
            break
    }
})