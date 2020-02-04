console.log('Hi');
//select all box in div
let boxes = document.querySelectorAll('.boxes');
//switch btw player by let X=1 and O=0
let player = 1;
function switchPlayer() {
    if (player == 1) {
        this.innerHTML = "X";
        player = 0;
    } else {
        this.innerHTML = "O";
        player = 1;
    }
    //after player chose the box can not change it 
    this.removeEventListener("click",switchPlayer );
    //call function to check condition 
    checkForWins();
}
// for loop for boxes
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", switchPlayer); 
}
//get all boxes by ID
var Box0 = document.getElementById("Box0");
var Box1 = document.getElementById("Box1");
var Box2 = document.getElementById("Box2");
var Box5 = document.getElementById("Box5");
var Box4 = document.getElementById("Box4");
var Box3 = document.getElementById("Box3");
var Box6 = document.getElementById("Box6");
var Box7 = document.getElementById("Box7");
var Box8 = document.getElementById("Box8");
function stopAftwer(){
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].removeEventListener("click", switchPlayer); 
    }
}


//function to check the boxes of winer 
function checkForWins() {
    if (Box0.innerHTML!=="" && Box0.innerHTML === Box1.innerHTML && Box0.innerHTML === Box2.innerHTML) {
        document.getElementById("Win").textContent = "congrats you Win";
        stopAftwer();
    }    
    else if (Box3.innerHTML!=="" && Box3.innerHTML === Box4.innerHTML && Box3.innerHTML === Box5.innerHTML){

        document.getElementById("Win").textContent = "congrats you Win"; 
        stopAftwer();}

    else if (Box7.innerHTML!=="" && Box7.innerHTML === Box7.innerHTML && Box6.innerHTML === Box8.innerHTML){

        adocument.getElementById("Win").textContent = "congrats you Win";
        stopAftwer();}

    else if (Box0.innerHTML!=="" && Box0.innerHTML === Box3.innerHTML && Box0.innerHTML === Box6.innerHTML){

        document.getElementById("Win").textContent = "congrats you Win";
        stopAftwer();}

    else if ( Box1.innerHTML!=="" && Box1.innerHTML === Box4.innerHTML && Box1.innerHTML === Box7.innerHTML){

        document.getElementById("Win").textContent = "congrats you Win";
        stopAftwer();}

    else if (Box2.innerHTML!=="" && Box2.innerHTML === Box5.innerHTML && Box2.innerHTML === Box8.innerHTML){

        document.getElementById("Win").textContent = "congrats you Win";
        stopAftwer();}

    else if (Box0.innerHTML!=="" && Box0.innerHTML === Box4.innerHTML && Box0.innerHTML === Box8.innerHTML){

        document.getElementById("Win").textContent = "congrats you Win";
        stopAftwer();}

    else if ( Box2.innerHTML!=="" &&  Box2.innerHTML === Box4.innerHTML && Box2.innerHTML === Box6.innerHTML){

        document.getElementById("Win").textContent = "congrats you Win";
        stopAftwer();}
    else {
        document.getElementById("Win").textContent = "The game tie";
    }
}


function replay() {

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", switchPlayer); 
        boxes[i].innerHTML="";
    }
    player = 1;
}
