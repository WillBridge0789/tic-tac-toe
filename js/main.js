//-------------------EVENT LISTENERS----------------------//



//-------------------VARIABLES----------------------//

const tiles = [0, 1, 2, 3, 4, 5, 6, 7, 8];

//-------------------RENDERED HTML----------------------//

let main = document.getElementById('ttt-app');
let gameBoard = document.createElement('div');
gameBoard.setAttribute('class', 'container');
main.appendChild(gameBoard);

let tile = document.createElement('div');
tile.setAttribute('class', 'tile0');
gameBoard.appendChild(tile);

let tile1 = document.createElement('div');
tile1.setAttribute('class', 'tile1');
gameBoard.appendChild(tile1);

let tile2 = document.createElement('div');
tile2.setAttribute('class', 'tile2');
gameBoard.appendChild(tile2);

let tile3 = document.createElement('div');
tile3.setAttribute('class', 'tile3');
gameBoard.appendChild(tile3);

let tile4 = document.createElement('div');
tile4.setAttribute('class', 'tile4');
gameBoard.appendChild(tile4);

let tile5 = document.createElement('div');
tile5.setAttribute('class', 'tile5');
gameBoard.appendChild(tile5);

let tile6 = document.createElement('div');
tile6.setAttribute('class', 'tile6');
gameBoard.appendChild(tile6);

let tile7 = document.createElement('div');
tile7.setAttribute('class', 'tile7');
gameBoard.appendChild(tile7);

let tile8 = document.createElement('div');
tile8.setAttribute('class', 'tile8');
gameBoard.appendChild(tile8);

//-------------------OBJECTS----------------------//

let boardState = {
    currentPlayer: "",
    boardSpots: tiles,
    winConditions: [
        [0 ,1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
}

//-------------------FUNCTIONS----------------------//

function init() {

}

function checkWin() {

}

function switchPlayer() {
    
}

function makeMove() {
    
}

function checkWin() {
    
}

function endGame() {
    
}

function resetGame() {
    
}

//-------------------UNUSED----------------------//


