console.log('is this working?');

var squareArray = document.getElementsByClassName("square")
var square1 = document.getElementById("square1")

console.log(typeof squareArray)
for (var i = 0; i < squareArray.length; i++){
    var square = squareArray.item(i);
    square.addEventListener("click", function(){ 
        alert("Hello World!"); 
     });
}
// squareArray.forEach(function(square){
//     square.addEventListener("click", function(){ 
//         alert("Hello World!"); 
//     });
// });




