
const boardElement = document.getElementById('board');

const ROWS = 10;
const COLS = 10;

// Generate a random starting grid
function generateRandomGrid() {
    let grid = [];

    for (let i = 0; i < ROWS; i++) {
        let row = [];

        for (let j = 0; j < COLS; j++) {
            let cell = Math.random() > 0.7 ? 1 : 0;
            row.push(cell);
        }

        grid.push(row);
    }

    return grid;
}

// Display the grid
function render(grid) {
    boardElement.innerHTML = '';
    boardElement.style.setProperty('--cols', grid[0].length);

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const cell = document.createElement('div');

            cell.className = grid[r][c] === 1
                ? 'cell alive'
                : 'cell';

            boardElement.appendChild(cell);
        }
    }
}

// Count living neighbours
function countNeighbours(grid, row, col) {
    let count = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {

            if (i === 0 && j === 0) {
                continue;
            }

            let newRow = row + i;
            let newCol = col + j;

            if (
                newRow >= 0 &&
                newRow < ROWS &&
                newCol >= 0 &&
                newCol < COLS
            ) {
                count += grid[newRow][newCol];
            }
        }
    }

    return count;
}

// Calculate the next generation
function nextGeneration(grid) {
    let newGrid = [];

    for (let r = 0; r < ROWS; r++) {
        let row = [];

        for (let c = 0; c < COLS; c++) {
            let neighbours = countNeighbours(grid, r, c);
            let cell = grid[r][c];

            if (cell === 1) {
                if (neighbours < 2 || neighbours > 3) {
                    row.push(0);
                } else {
                    row.push(1);
                }
            } else {
                if (neighbours === 3) {
                    row.push(1);
                } else {
                    row.push(0);
                }
            }
        }

        newGrid.push(row);
    }

    return newGrid;
}

// Start the game
let grid = generateRandomGrid();

render(grid);

// Update every 500 milliseconds
setInterval(function() {
    grid = nextGeneration(grid);
    render(grid);
}, 500);
