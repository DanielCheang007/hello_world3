
// var a = 100

// html element
const aInput = document.querySelector("input#a")

const bInput = document.querySelector("input#b")

const operatorSelect = document.querySelector("select#operator")

const resButton = document.querySelector("button")

const resultSpan = document.querySelector("span#result")

// html element's attributes
console.log(aInput.style)
console.log(aInput.className)

// html element's property
console.log(aInput.value)

function calculate() {
    const aVal = parseFloat(aInput.value)
    const bVal = parseFloat(bInput.value)

    // const result = aVal + bVal
    let result

    const op = operatorSelect.value
    if (op === "+") {
        result = aVal + bVal
    }

    if (op === "-") {
        result = aVal - bVal
    }

    if (op === "*") {
        result = aVal * bVal
    }

    if (op === "/") {
        result = aVal / bVal
    }

    resultSpan.innerText = result
    // alert(result)
}

// property
resButton.addEventListener("click", calculate)
