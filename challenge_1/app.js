console.log('is this working?');

    
   for (let i = 1; i <= 9; i++){ 
     var id = JSON.stringify(i)
     var square = document.getElementById(i);
     console.log(square);
     square.addEventListener("click", function(event){
          console.log(event);
         console.log(event.target.innerText);
         if (!event.target.innerText) {
             (event.target).append("x");
         } 
     })
   }







