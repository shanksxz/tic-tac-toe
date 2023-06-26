const gameInfo = document.querySelector('.gameInfo');
const boxes = document.querySelectorAll('.box');
const newGameBtn = document.querySelector('.btn');


let currentPlayer;
let gameGrid;

const winningPos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];



initGame();

function initGame() {
    currentPlayer = 'X';
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    boxes.forEach((box, index) => {
        box.innerText = "";
        boxes[index].style.pointerEvents = "all";
        if(box.classList.contains = "win"){
            box.classList.remove("win");
        }
    });
    newGameBtn.classList.remove('active');
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        handleClick(index);
    })
});


function swapPlayer() {
    (currentPlayer === 'X')? currentPlayer = 'O' : currentPlayer ='X'

    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

function checkGameOver() {
    let answer = "";

    winningPos.forEach((position) => {
        if ((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") 
        && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {

            answer = gameGrid[position[0]] === "X" ? "X" : "O";
            
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

        }
    });

    if(answer!= ""){
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add('active');
    }

    let boxfill = 0;
    gameGrid.forEach((box) => {
        if(box !== ""){
            boxfill++;
        }
    });

    if(boxfill===9){
        gameInfo.innerText = 'Game Tied!';
        newGameBtn.classList.add('active');
    }

}

function handleClick(index) {

    if (gameGrid[index] === '') {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
    }
    swapPlayer();
    checkGameOver();
}

newGameBtn.addEventListener("click", initGame);
