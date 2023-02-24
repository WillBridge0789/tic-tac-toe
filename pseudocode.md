# Tic-Tac-Toe

## Objectives
* The game should let the players know who's turn it is.
* Player x or player O
* Remove EventListeners
* Game tiles should only be clickable once
* if the game is over they should not be clickable at all.
* The game should display who wins the game if someone wins, otherwise, say that the game resulted in a tie.
* There should be a Restart Game button that does not refresh the page (set state).
* On each player’s turn, that player places one of their symbols on an unoccupied space by clicking.
* The game continues until one player places three symbols in a straight line (horizontal, vertical, or diagonal) and wins or there are no remaining available spaces and it is a draw.
* Only have a single <div id="app"></div> in your index.HTML (try to code golf the HTML file)


## Variables
* STATE 
	- currentPlayer
	- boardState = [] (NINE SPOTS)
	- winConditions
		[0,1,2]
		[3,4,5]
		[6,7,8]
	[0,3,6]
		1,4,7
		2,5,8
		0,4,8
		2,4,6
* **tiles** = [0, 1, 2, 3, 4, 5, 6, 7, 8];
* **button**: after clicking a space, (whether player x OR player o turn), will stop working after one click
* **reset button**: clears or resets game board. 

## Rendered Elements
- 9 divs with class "tile" (tile, tile1, tile2 etc.)

## Functions
- playerXO()
    - Passes in the parameters 'x' and 'o'
	- Also passes a statement that switches between the 'x' and 'o' after clicking on 1 tile.
    - Start with 'X'. After tile is clicked,
    switch symbol to 'O'
	- If currentPlayer == ‘X’
		- currentPlayer = ‘O’
	- Else
		- currentPlayer = ‘X’
- makeMove()
	- Adds the current player to the tile clicked
	- **checkWin()**
	- **IF** win do **endGame()**
	- **ELSE**
		- Switches the Player in state
- checkWin()
    - checks state winConditions to see if either players 3 spots matched one of the indecises in the winConditions array. 
    * **IF** playerX **OR** playerO equals state.winConditions
        * show winning player
    * **ELSE** 
        * show 'Cat Game!'
- endGame()
	- Checks to see if turn count has reached 9
	- After checking the turn count to see if it has reached 9, it then shows that it was a "tie".
- resetGame()
    * Drawboard
    - Resets state to initial values
## Procedures

- PLAYERXO
	* Star with player X

- MAKE-MOVE
	* When playerXO clicks on a tile, it adds player to tile with their symbol

- CHECK-WIN
	* IF no winConditions were met, switch player 'X' to 'O': **playerXO()** => **makeMove()**
	* update boardState

- MAKE-MOVE
	* Player chooses another tile, adds their symbol to the board

## HTML Layout
### Table set-up

<div class = "container">
    <div class = "row">
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
    </div>
    <div class = "row">
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
    </div>
    <div class = "row">
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
        <div class = "col-4">
            <div class = "tile"></div>
        </div>
    </div>
</div>            