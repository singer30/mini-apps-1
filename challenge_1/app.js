var newGame = document.getElementsByClassName("newGame")
var squares = document.getElementsByClassName("squares")

selectX = false;

var charSelect = function() {
    if(!selectX) {
        selectX = true;
        return "X"
        
    } else {
        selectX = false;
        return "O"   
    }
}
    
   for (let i = 1; i <= squares.length; i++){ 
     var square = document.getElementById(i);
     square.addEventListener("click", function(event){
         if (!event.target.innerText) {
             (event.target).append(charSelect());
         } 
     })
   }

console.log(newGame)
console.log(squares[0])

newGame[0].addEventListener("click", function(event) {
    for(var i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }      
})







