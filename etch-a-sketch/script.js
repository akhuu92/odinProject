// Grab container div
const container = document.querySelector("#container");

// Create 16x16 square divs
const createSquares = () => {
    // Create 16 rows
    for (let i = 1; i <= 16; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        // Create 16 squares in a row
        for (let j = 1; j <= 16; j++) {
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
    console.log(e.target.id);
    document.getElementById(e.target.id).classList.add("black");
}

const reset = () => {
    let board = document.getElementsByClassName("black");
    while (board.length > 0) {
        board[0].classList.remove("black");
    };
}

const undo = () => {
    let board = document.getElementsByClassName("black");
    board[0].classList.remove("black");
}


createSquares();