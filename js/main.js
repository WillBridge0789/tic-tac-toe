//-------------------EVENT LISTENERS----------------------//



//-------------------VARIABLES----------------------//

//const tiles = ["X", "", "", "", "", "", "", "", ""];

/* const winConditions = [
    [0 ,1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];*/

//-------------------RENDERED HTML----------------------//

let main = document.getElementById('ttt-app');
let gameBoard = document.createElement('div');
gameBoard.setAttribute('class', 'container');
main.appendChild(gameBoard);

//-------------------ROWS----------------------//

let row1 = document.createElement('div');
//row1.setAttribute('class', 'row');
row1.className = 'row game-column';
gameBoard.appendChild(row1);

let row2 = document.createElement('div');
//row2.setAttribute('class', 'row');
row2.className = 'row game-column';
gameBoard.appendChild(row2);

let row3 = document.createElement('div');
//row3.setAttribute('class', 'row');
row3.className = 'row game-column';
gameBoard.appendChild(row3);

//-------------------COLUMNS----------------------//

let col1 = document.createElement('div');
col1.className = 'col-md-4 border-start border-end';
row1.appendChild(col1);

let col2 = document.createElement('div');
col2.className = 'col-md-4 border-start border-end';
row1.appendChild(col2);

let col3 = document.createElement('div');
col3.className = 'col-md-4 border-start border-end';
row1.appendChild(col3);

let col4 = document.createElement('div');
col4.className = 'col-md-4 border-start border-end';
row2.appendChild(col4);

let col5 = document.createElement('div');
col5.className = 'col-md-4 border-start border-end';
row2.appendChild(col5);

let col6 = document.createElement('div');
col6.className = 'col-md-4 border-start border-end';
row2.appendChild(col6);

let col7 = document.createElement('div');
col7.className = 'col-md-4 border-start border-end';
row3.appendChild(col7);

let col8 = document.createElement('div');
col8.className = 'col-md-4 border-start border-end';
row3.appendChild(col8);

let col9 = document.createElement('div');
col9.className = 'col-md-4 border-start border-end';
row3.appendChild(col9);

//-------------------TILES----------------------//

let tile0 = document.createElement('div');
tile0.setAttribute('class', 'tile');
col1.appendChild(tile0);

let tile1 = document.createElement('div');
tile1.setAttribute('class', 'tile');
col2.appendChild(tile1);

let tile2 = document.createElement('div');
tile2.setAttribute('class', 'tile');
col3.appendChild(tile2);

let tile3 = document.createElement('div');
tile3.setAttribute('class', 'tile');
col4.appendChild(tile3);

let tile4 = document.createElement('div');
tile4.setAttribute('class', 'tile');
col5.appendChild(tile4);

let tile5 = document.createElement('div');
tile5.setAttribute('class', 'tile');
col6.appendChild(tile5);

let tile6 = document.createElement('div');
tile6.setAttribute('class', 'tile');
col7.appendChild(tile6);

let tile7 = document.createElement('div');
tile7.setAttribute('class', 'tile');
col8.appendChild(tile7);

let tile8 = document.createElement('div');
tile8.setAttribute('class', 'tile');
col9.appendChild(tile8);

let resetBtn = document.createElement('button');
resetBtn.innerText = 'Reset Game';
main.appendChild(resetBtn);
resetBtn.addEventListener('click', function() {
    let main = document.getElementById('ttt-app');
    let gameBoard = document.createElement('div');
    gameBoard.setAttribute('class', 'container');
    main.replaceChildren(gameBoard);

    //-------------------ROWS----------------------//

    let row1 = document.createElement('div');
    //row1.setAttribute('class', 'row');
    row1.className = 'row border  game-column';
    gameBoard.appendChild(row1);

    let row2 = document.createElement('div');
    //row2.setAttribute('class', 'row');
    row2.className = 'row border  game-column';
    gameBoard.appendChild(row2);

    let row3 = document.createElement('div');
    //row3.setAttribute('class', 'row');
    row3.className = 'row border  game-column';
    gameBoard.appendChild(row3);

    //-------------------COLUMNS----------------------//

    let col1 = document.createElement('div');
    col1.className = 'col-md-4 border-start border-end  ';
    row1.appendChild(col1);

    let col2 = document.createElement('div');
    col2.className = 'col-md-4 border-start border-end  ';
    row1.appendChild(col2);

    let col3 = document.createElement('div');
    col3.className = 'col-md-4 border-start border-end ';
    row1.appendChild(col3);

    let col4 = document.createElement('div');
    col4.className = 'col-md-4 border-start border-end ';
    row2.appendChild(col4);

    let col5 = document.createElement('div');
    col5.className = 'col-md-4 border-start border-end ';
    row2.appendChild(col5);

    let col6 = document.createElement('div');
    col6.className = 'col-md-4 border-start border-end ';
    row2.appendChild(col6);

    let col7 = document.createElement('div');
    col7.className = 'col-md-4 border-start border-end ';
    row3.appendChild(col7);

    let col8 = document.createElement('div');
    col8.className = 'col-md-4 border-start border-end ';
    row3.appendChild(col8);

    let col9 = document.createElement('div');
    col9.className = 'col-md-4 border-start border-end ';
    row3.appendChild(col9);

    //-------------------TILES----------------------//

    let tile0 = document.createElement('div');
    tile0.setAttribute('class', 'tile');
    col1.appendChild(tile0);

    let tile1 = document.createElement('div');
    tile1.setAttribute('class', 'tile');
    col2.appendChild(tile1);

    let tile2 = document.createElement('div');
    tile2.setAttribute('class', 'tile');
    col3.appendChild(tile2);

    let tile3 = document.createElement('div');
    tile3.setAttribute('class', 'tile');
    col4.appendChild(tile3);

    let tile4 = document.createElement('div');
    tile4.setAttribute('class', 'tile');
    col5.appendChild(tile4);

    let tile5 = document.createElement('div');
    tile5.setAttribute('class', 'tile');
    col6.appendChild(tile5);

    let tile6 = document.createElement('div');
    tile6.setAttribute('class', 'tile');
    col7.appendChild(tile6);

    let tile7 = document.createElement('div');
    tile7.setAttribute('class', 'tile');
    col8.appendChild(tile7);

    let tile8 = document.createElement('div');
    tile8.setAttribute('class', 'tile');
    col9.appendChild(tile8);

    let resetBtn = document.createElement('button');
    resetBtn.innerText = 'Reset Game';
    main.appendChild(resetBtn);
})

//-------------------OBJECTS----------------------//


//-------------------OBJECTS----------------------//

let gameState = {
    currentPlayer: 'X',
    gameBoard: [],
    turnCount: 0,
    gameStatus: true
}
gameState.gameBoard = document.querySelectorAll(".tile");
console.log(gameState.gameBoard);
//-------------------FUNCTIONS----------------------//

/* function init() {

} */

/* function playerXO() {
    if (gameState.currentPlayer == 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
} */

function makeMove() {
    for (let i = 0; i < gameState.gameBoard.length; i++) {
        console.log(gameState.gameBoard);
        gameState.gameBoard[i].addEventListener('click',function() {
            if (gameState.turnCount % 2 === 0) {
                gameState.gameBoard[i].innerText = 'X';
            } else {
                gameState.gameBoard[i].innerText = 'O';
            }
            gameState.turnCount++; 
            checkWin();
        })
    }
}
makeMove();

function checkWin() {
    const winConditions = [
        [0 ,1, 2], 
        [3, 4, 5], 
        [6, 7, 8], 
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < winConditions.length; i++) {
        let markCount = 0;
        for (let j = 0; j < winConditions[i].length; j++) {
            if (gameState.turnCount % 2 === 0 && gameState.gameBoard[winConditions[i][j]].innerText == 'O') {
                markCount++
                console.log(markCount);
            } else if (gameState.turnCount % 2 === 1 && gameState.gameBoard[winConditions[i][j]].innerText == 'X') {
                markCount++
            }

            if (gameState.gameBoard[winConditions[i][j]].innerText == gameState.currentPlayer) {
                console.log(markCount);
            }
        
        } 
        if (markCount === 3) {
            alert('We have a Winner!');
        }
    } 
}    
console.log(checkWin);

function endGame() {
 
}

function resetGame() {
    /* resetBtn.removeEventListener('click', => {

    }) */
}

//-------------------UNUSED----------------------