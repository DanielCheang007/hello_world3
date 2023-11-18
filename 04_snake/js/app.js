const pg = document.querySelector("#playground")
const pgStyle = getComputedStyle(pg)

const WIDTH = parseInt(pgStyle.getPropertyValue("--width"))
const HIGHT = parseInt(pgStyle.getPropertyValue("--height"))

const COLS = 10
const ROWS = 20
const TOTAL_CELLS = COLS * ROWS

const cellWidth = WIDTH / COLS
const cellHeight = HIGHT / ROWS

const CELLS = []


for (let i = 0; i < TOTAL_CELLS; i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.style.width = cellWidth + "px"
    cell.style.height = cellHeight + "px"
    pg.appendChild(cell)

    CELLS.push(cell)
}

const snake = [31, 32, 33, 43]

function renderSnake() {
    const cells = CELLS.filter((cell) => cell.classList.contains("has-snake"))
    cells.forEach((cell) => cell.classList.remove('has-snake'))

    snake.forEach((cellIdx) => {
        const cell = CELLS[cellIdx]
        cell.classList.add("has-snake")
    })
}

renderSnake()

document.addEventListener("keydown", (event) => {
    let cellIdx = snake[0]

    if (event.key === "ArrowDown") {
        cellIdx += COLS
    } else if (event.key === "ArrowUp") {
        cellIdx -= COLS
    } else if (event.key === "ArrowLeft") {
        cellIdx -= 1
    } else if (event.key === "ArrowRight") {
        cellIdx += 1
    }

    // touch the wall check
    const r = Math.floor(cellIdx / COLS)
    const c = cellIdx % COLS
    //TODO: left right wall check faild
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS) {
        alert("Game Over")
        return
    }

    // add current cell idx to the snake
    snake.unshift(cellIdx)

    // remove the tail
    if (CELLS[cellIdx].classList.contains("has-food")) {
        CELLS[cellIdx].classList.remove("has-food")
        dropFood()
    } else {
        snake.pop()
    }

    renderSnake()
})



const pgArray = []
for (let i = 0; i < TOTAL_CELLS; i++) {
    pgArray.push(i)
}

function dropFood() {
    // filter cells that not have snake body
    const availableCells = pgArray.filter(function (el) {
        return !snake.includes(el)
    })

    // get a random idx from available cells
    let randomPos = Math.floor(Math.random() * availableCells.length)

    // get the cell index
    const cellIdx = availableCells[randomPos]

    // get the cell
    const cell = CELLS[cellIdx]

    // set the food class
    cell.classList.add("has-food")
}

dropFood()