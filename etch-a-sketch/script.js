// Grab container div
const container = document.querySelector("#container");
let value = 16;

// Create 16x16 square divs
const createSquares = (value) => {
    // Create 16 rows
    for (let i = 1; i <= value; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        // Create 16 squares in a row
        for (let j = 1; j <= value; j++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.id = i + "-" + j;

            square.onmouseover = changeColor;

            row.appendChild(square);
        }
        container.appendChild(row);
    }
}

const changeColor = (e) => {
    document.getElementById(e.target.id).classList.add("black");
}

const reset = (e) => {
    let board = document.getElementsByClassName("black");
    while (board.length > 0) {
        board[0].classList.remove("black");
    };
}

const recreateGrid = () => {
    event.preventDefault();
    console.log("in");
    // Grab all divs with class: square then delete all divs with class: square
    let rowDiv = document.getElementsByClassName("row");
    while (rowDiv[0]) {
        rowDiv[0].parentNode.removeChild(rowDiv[0]);
    };
    // Recreate grid
    let newValue = document.getElementById("grid-size-input").value;
    console.log(newValue)
    createSquares(newValue);
    
}

createSquares(value);