let color = "black";

function populateBoard(size) {
    let board = document.querySelector('.board');

    // Remove previous squares when there's a change
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => {div.remove()});

    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    for (let i=0; i<size*size; i++) {
        let square = document.createElement('div');

        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square);
    }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100)
        populateBoard(input);
    else {
        alert("Number of Squares must be in range [2,100]");
    }

}

function colorSquare() {
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice;
}

function resetBoard() {
    let board = document.querySelector('.board');

    // Remove previous squares when there's a change
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => {div.style.backgroundColor = "white"});
}