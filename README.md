# connect4API

Description

This game is played on a vertical board wich has seven hollow columns and six rows. Each column has a hole in the upper part of the board, where pieces are introduced. There is a window for every square, so that pieces can be seen from both sides.

In short, it´s a vertical board with 42 windows distributed in 6 rows and 7 columns.

Both players have a set of 21 thin pieces (like coins); each of them uses a different colour. The board is empty at the start of the game.

Objective

The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.

How the game goes on

Before starting, players decide randomly which of them will be the beginner; moves are made alternatively, one by turn.

Moves entails in placing new pieces on the board; pieces slide downwards from upper holes, falling down to the last row or piling up on the last piece introduced in the same column. So, in every turn the introduced piece may be placed at most on seven different squares.

The winner is the first player who gets a straight line made with four own pieces and no gaps between them.



Connect4 game logic using APIs:
I have used postman for testing and have included the screenshots of the testing.
Url:  https://tranquil-castle-05262.herokuapp.com/start
When a get request in done on the above given URL it will return ("Ready!")


And subsequently doing POST requests with column value also being passed in the post request as a body parameter will result in a coin  being dropped in that column in my mongoDbAtlas database
and after that my code will put it in the right place and do all the necessary computation and return the appropriate result such as valid ,invalid and Winners.
Doing a get request to above given url will reset and restart the game fresh.

Since 0 index has been used colmn values are 0 1 2 3 4 5 6
and using any other value for column will result in invalid 

![Image of snip](https://github.com/mespsar/connect4API/blob/master/images%20for%20demo/invalid%20since%20there%20are%20only%207%20columns.PNG)
response='invalid' since there are only 7 


![Image of snip](https://github.com/mespsar/connect4API/blob/master/images%20for%20demo/post%20request(1).PNG)
response='valid'


![Image of snip](https://github.com/mespsar/connect4API/blob/master/images%20for%20demo/yellow%20winning.PNG)
response='yellow won' when yellow wins 
