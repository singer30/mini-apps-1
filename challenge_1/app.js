console.log(typeof scoreX.innerHTML);

var table = document.getElementsByTagName("table");
console.log(table.rows)

var newGame = document.getElementsByClassName("newGame")
var squares = document.getElementsByClassName("squares")
var message = document.getElementById("message")
count = 0;

var pers1;
var pers2;

selectX = false;

var board = ["", "", "", "", "", "", "", "", "",];

var charSelect = function() {
    if(!selectX) {
        selectX = true;
        return "X"
        
    } else {
        selectX = false;
        return "O"   
    }
}

var selectName = function() {
    var person = prompt('Please enter your name');
    if(person != null) {
        pers1 = person
        document.getElementById("playerX").innerHTML = 'PlayerX:' + ' ' + person;
    }
    var person2 = prompt('Please enter your name');
    if (person2 != null) {
        pers2 = person2;
        document.getElementById('playerO').innerHTML = 'PlayerO:' + ' ' + person2;
    }
}



    
   for (let i = 0; i <= 8; i++){ 
     var square = document.getElementById(i);
     square.addEventListener("click", function(event){
        //  console.log(event.target.innerText);
         if (!event.target.innerText) {
             (event.target).append(charSelect());
             board[event.target.id] = event.target.innerText;
             count++;
             checkForAWinner();
             checkForATie(checkForAWinner);
             // check if there is a winner. 
             // if there is a winner, launch an alert announcing the winner. 
         } 
     })
   }

newGame[0].addEventListener("click", function(event) {
    for(var i = 0; i < 9; i++) {
        var square = document.getElementById(i);
        squares[i].innerHTML = "";
        board = ["", "", "", "", "", "", "", "", "",];
        selectX = false;
        message.innerHTML = `Welcome to Luke's Tic-Tac-Toe!`
        count = 0;
    }      
})


var checkForAWinner = function() { 
    //horizontal win 
     if ((board[0] + board[1] + board[2]) === 'XXX' || (board[0] + board[1] + board[2]) === 'OOO' ) {
         if(board[0] === 'X') {
             message.innerHTML = (`The winner is ${pers1}`);
             scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1;
         } 
     }
     if ((board[3] + board[4] + board[5]) === 'XXX' || (board[3] + board[4] + board[5]) === 'OOO' ) {
         if(board[3] === 'X') {
             message.innerHTML = (`The winner is ${pers1}`);
             scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1; 
         } 
     }
     if ((board[6] + board[7] + board[8]) === 'XXX' || (board[6] + board[7] + board[8]) === 'OOO' ) {
         if(board[6] === 'X') {
             message.innerHTML = (`The winner is ${pers1}`);
             scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1; 
         } 
     }
     //vertical win 
     if ((board[0] + board[3] + board[6]) === 'XXX' || (board[0] + board[3] + board[6]) === 'OOO' ) {
         if(board[0] === 'X') {
            message.innerHTML = (`The winner is ${pers1}`);
            scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1; 
         } 
     }
     if ((board[1] + board[4] + board[7]) === 'XXX' || (board[1] + board[4] + board[7]) === 'OOO' ) {
         if(board[1] === 'X') {
            message.innerHTML = (`The winner is ${pers1}`);
            scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1; 
         } 
     }
     if ((board[2] + board[5] + board[8]) === 'XXX' || (board[2] + board[5] + board[8]) === 'OOO' ) {
         if(board[2] === 'X') {
            message.innerHTML = (`The winner is ${pers1}`);
            scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1; 
         } 
     }
     // diagonal win
     if ((board[2] + board[4] + board[6]) === 'XXX' || (board[2] + board[4] + board[6]) === 'OOO' ) {
         if(board[2] === 'X') {
            message.innerHTML = (`The winner is ${pers1}`);
            scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1; 
         } 
     }
     if ((board[0] + board[4] + board[8]) === 'XXX' || (board[0] + board[4] + board[8]) === 'OOO' ) {
         if(board[0] === 'X') {
            message.innerHTML = (`The winner is ${pers1}`);
            scoreX.innerHTML = parseInt(scoreX.innerHTML) + 1;
         } else {
             message.innerHTML = (`The winner is ${pers2}`);
             scoreO.innerHTML = parseInt(scoreO.innerHTML) + 1; 
         } 
     }
}


var checkForATie = function(func) {
    if(count === 9) {
        func();
        if(winner === undefined) {
           message.innerHTML = (`It's a tie!`) 
        }
    }
}