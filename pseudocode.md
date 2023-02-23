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
- init()
- checkWin()
    - checks state winConditions to see if either players 3 spots matched one of the indecises in the winConditions array. 
    * **IF** playerX **OR** playerO === state.winConditions
        * show winning player
    * **ELSE** 
        * show 'Cat Game!'
- playerXO()
    - Passes in the parameters 'x' and 'o'
	- Also passes a statement that switches between the 'x' and 'o' after clicking on 1 tile.
    - Start with 'X'. After tile is clicked,
        - switch symbol to 'O' 
- resetGame()
    * Drawboard
    - Resets state to initial values
## Procedures

- INIT
	* Draw the board
	* For each tile drawn, add a click listener to it
