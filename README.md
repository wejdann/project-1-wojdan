## Game (Tic Tac Toe) project 
[Link to my Game web page ]( https://wejdann.github.io/project-1-wojdan/ )
#### Game overview :
Tic-Tac -Toe (along with a lot of other games) involves looking ahead and trying to figure out what the person playing against you might do next.
####  List of technologies use it :
* **javascript** ( programming language of HTML and the Web)
* **CSS**  (Cascading Style Sheets)
*  **HTML** (Hypertext Markup Language)
### The wireframes pic :
![GitHub Logo](/imges/Web.png)
#### User stories :
1. **As a player,** I want to start a new tic tac toe game to play it.
2.  **As a player,** I want to click on a square to to add X first and then O .
3.  **As a player,** I want to show a message after each move to know if I win, lose, tie or for who's the next move .
4. **As a player,**  I want to be unable to click the same square twice to avoid the error.
5. **As a player,**  I want to see a message when I win, lose or tie to know my status.
6. **As a player,**  I want to be unable to to continue playing once I win, lose, or tie, to keep the game rols.
7. **As a player,** I want to be able to play the game again without refreshing the page to make the game reusable.
###The plan :
##### Personal Development Plan :
1. **My Goals :** Create a game work without error both logical and technology.
2. **Objective :** Do all the basic requirement of project.
3. **Resources required :** Keep on training.
4. **Measurement :** Successful .
5. **Deadline :** One week .

#####  problem-solving strategy :
* Draw the number from 1 to 9 in the table.
* Check row.
* Check column .
* Check the cross line .
* Check the win .
* Still in play or not depend on the role of game .

**future plans :** 
Work to doing  all the Extra Tic Tac Toe Features , and the Super Potential Extra Tic Tac Toe Features

####  The way of solve the win :
* Create a function that check the condition by using (if else) and return a messages describe the status of player and depend on it the play either continue or stop .
**The check win line :**
1. check boxes in row(1) >[0],[1],[2] .
2. check boxes in row(2) >[3],[4],[5] .
3. check boxes in row(3) >[6],[7],[8] . 
4. check boxes in colum(1) >[0],[3],[6].
5. check boxes in colum(2) >[1],[4],[5].
6. check boxes in colum(3) >[2],[5],[8].
7. check boxes in cross(left-side)[0],[4],[8].
8. check boxes in cross(right-side)[2],[4],[6].
9. else return the game is tie .
10. if player win the game will stop.

#### My favorite functions
* function switchPlayer() :
Because it is the easier part in my code .
