"use strict"
let x= +prompt("Enter number");
while (Number.isNaN(x) || x.length === 0  || !Number.isInteger(x)  ){
     x = +prompt("Enter corect number")
}
if(x<5){
    console.log("Sorry, no numbers");
} else     
    for(let y=0; y<=x; y++){
    if(y % 5 == 0){
        console.log(y);
    }
     } 

  
