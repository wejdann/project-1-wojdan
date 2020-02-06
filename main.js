console.log('Hi');
//select all box in div
let boxes = document.querySelectorAll('.boxes');
//declare variable to use it in  function
let player = 1;
let turnsCount = 0;
let moveTonext = document.getElementById("move");
//switch btw player by let X=1 and O=0
function switchPlayer() {
    turnsCount++;
    if (player == 1) {
        this.innerHTML = "X";
        document.getElementById("move").textContent = "Turn To Player 'O'";
        player = 0;
    } else {
        this.innerHTML = '<span style="color:#FFF"> O </span>';
        document.getElementById("move").textContent = "Turn To Player 'X'";
        player = 1;
    }
    //after player chose the box can not change it 
    this.removeEventListener("click", switchPlayer);
    //call function to check condition 
    checkForWins();
}
// for loop for boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", switchPlayer);
}
//get all boxes by ID
var allBoxes = document.getElementById("Box0", "Box1", "Box2", "Box3", "Box4", "Box5", "Box6", "Box7", "Box8");
//function to stop game after win
function stopGameAfterWin() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener("click", switchPlayer);
    }
    moveTonext.style.display = 'none';
}
//function to check the boxes of winer 
function checkForWins() {
    //this if check boxes in row(1) >>[0],[1],[2] , then return massage and  stop game by call function
    if (Box0.innerHTML !== "" && Box0.innerHTML === Box1.innerHTML && Box0.innerHTML === Box2.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //this if check boxes in row(2) >>[3],[4],[5] , ~~~~~
    else if (Box3.innerHTML !== "" && Box3.innerHTML === Box4.innerHTML && Box3.innerHTML === Box5.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //this if check boxes in row(3) >>[6],[7],[8] , ~~~~~
    else if (Box6.innerHTML !== "" && Box6.innerHTML === Box7.innerHTML && Box6.innerHTML === Box8.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //this if check boxes in colum(1) >>[0],[3],[6] , ~~~~~
    else if (Box0.innerHTML !== "" && Box0.innerHTML === Box3.innerHTML && Box0.innerHTML === Box6.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //this if check boxes in colum(2) >>[1],[4],[5] , ~~~~~
    else if (Box1.innerHTML !== "" && Box1.innerHTML === Box4.innerHTML && Box1.innerHTML === Box7.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //this if check boxes in colum(3) >>[2],[5],[8] , ~~~~~
    else if (Box2.innerHTML !== "" && Box2.innerHTML === Box5.innerHTML && Box2.innerHTML === Box8.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //this if check boxes in cross (left-side) >>[0],[4],[8] , ~~~~~
    else if (Box0.innerHTML !== "" && Box0.innerHTML === Box4.innerHTML && Box0.innerHTML === Box8.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //this if check boxes in cross (right-side) >>[2],[4],[6] , ~~~~~
    else if (Box2.innerHTML !== "" && Box2.innerHTML === Box4.innerHTML && Box2.innerHTML === Box6.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopGameAfterWin();
    }
    //if all condition not true and all boxes have value X and O show massage the game is tie
    else if (turnsCount == 9) {
        document.getElementById("Win").textContent = "The game is tie !";

    }
}
//this function for clear boxes and allow to  StartAgain when click the button 
function replay() {
    for (let i = 0; i < boxes.length; i++) {
        document.getElementById("Win").textContent = "";
        moveTonext.style.display = "";
        boxes[i].addEventListener("click", switchPlayer);
        boxes[i].innerHTML = "";
        turnsCount = 0;
    }
    player = 1;

}