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

for (let i = 0; i < snake.length; i++) {
    const idx = snake[i]
    const cell = CELLS[idx]
    cell.classList.add("has-snake")
}

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