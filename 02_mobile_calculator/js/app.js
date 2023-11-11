
const screen = document.querySelector("#screen")
const numBtns = document.querySelectorAll("button.num")

let a = 0 

for(let i = 0; i < numBtns.length; i++) {
    const numBtn = numBtns[i]

    numBtn.addEventListener("click", function () {
        a = a + numBtn.dataset.num
        screen.innerHTML = +a
    })
}

