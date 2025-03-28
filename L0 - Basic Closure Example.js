 function outerfunction(message){
     return function(logs){
         console.log("welcome to Masai", message)
     }
     
 }
 let calling = outerfunction("Hema")
 calling()