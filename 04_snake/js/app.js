const pg = document.querySelector("#playground")
const pgStyle = getComputedStyle(pg)

const WIDTH = parseInt(pgStyle.getPropertyValue("--width"))
const HIGHT = parseInt(pgStyle.getPropertyValue("--height"))

const COLS = 10
const ROWS = 20
const TOTAL_CELLS = COLS * ROWS

const cellWidth = WIDTH / COLS
const cellHeight = HIGHT / ROWS

for (let i = 0; i < TOTAL_CELLS; i++) {
    const cell = document.createElement("div")
    cell.classList.add("cell")
    cell.style.width = cellWidth + "px"
    cell.style.height = cellHeight + "px"
    pg.appendChild(cell)
}