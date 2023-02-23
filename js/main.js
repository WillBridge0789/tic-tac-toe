//-------------------EVENT LISTENERS----------------------//



//-------------------VARIABLES----------------------//

const tiles = ["X", "", "", "", "", "", "", "", ""];
let currentPlayer = 'X';

//-------------------RENDERED HTML----------------------//

let main = document.getElementById('ttt-app');
let gameBoard = document.createElement('div');
gameBoard.setAttribute('class', 'container');
main.appendChild(gameBoard);

//-------------------ROWS----------------------//

let row1 = document.createElement('div');
row1.setAttribute('class', 'row');
gameBoard.appendChild(row1);

let row2 = document.createElement('div');
row2.setAttribute('class', 'row');
gameBoard.appendChild(row2);

let row3 = document.createElement('div');
row3.setAttribute('class', 'row');
gameBoard.appendChild(row3);

//-------------------COLUMNS----------------------//

let col1 = document.createElement('div');
col1.className = 'col-4';
row1.appendChild(col1);

let col2 = document.createElement('div');
col2.className = 'col-4';
row1.appendChild(col2);

let col3 = document.createElement('div');
col3.className = 'col-4';
row1.appendChild(col3);

let col4 = document.createElement('div');
col4.className = 'col-4';
row2.appendChild(col4);

let col5 = document.createElement('div');
col5.className = 'col-4';
row2.appendChild(col5);

let col6 = document.createElement('div');
col6.className = 'col-4';
row2.appendChild(col6);

let col7 = document.createElement('div');
col7.className = 'col-4';
row3.appendChild(col7);

let col8 = document.createElement('div');
col8.className = 'col-4';
row3.appendChild(col8);

let col9 = document.createElement('div');
col9.className = 'col-4';
row3.appendChild(col9);

//-------------------TILES----------------------//

let tile = document.createElement('div');
tile.setAttribute('class', 'tile0');
col1.appendChild(tile);

let tile1 = document.createElement('div');
tile1.setAttribute('class', 'tile1');
col2.appendChild(tile1);

let tile2 = document.createElement('div');
tile2.setAttribute('class', 'tile2');
col3.appendChild(tile2);

let tile3 = document.createElement('div');
tile3.setAttribute('class', 'tile3');
col4.appendChild(tile3);

let tile4 = document.createElement('div');
tile4.setAttribute('class', 'tile4');
col5.appendChild(tile4);

let tile5 = document.createElement('div');
tile5.setAttribute('class', 'tile5');
col6.appendChild(tile5);

let tile6 = document.createElement('div');
tile6.setAttribute('class', 'tile6');
col7.appendChild(tile6);

let tile7 = document.createElement('div');
tile7.setAttribute('class', 'tile7');
col8.appendChild(tile7);

let tile8 = document.createElement('div');
tile8.setAttribute('class', 'tile8');
col9.appendChild(tile8);

//-------------------OBJECTS----------------------//


//-------------------OBJECTS----------------------//

let gameState = {
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

function playerXO() {
    if (gameState.currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
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


