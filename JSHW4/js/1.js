"use strict"

let num1 = prompt ("Enter first number");
let num2 = prompt ("Enter second number");
 while (Number.isNaN(+num1) || Number.isNaN(+num2) ||  num1.length === 0 || num2.length === 0){
    num1 = prompt ("Enter corect first number",`${num1}`);
    num2 = prompt ("Enter corect second number", `${num2}`);
 }

 num1 = +num1;
 num2 = +num2;

let mathOp = prompt ("Enter math operation +, -, *, /");
   
let result = function(x, y, matOp){
   if(matOp === "+") {
      return x+y;
    }
    else if(matOp ==="-"){
      return x-y;
    }
    else if(matOp ==="*"){
      return x*y;
    }
    else if(matOp ==="/"){
      return x/y;
    }
    
    else {
      mathOperation = prompt("Enter corect math operation");
      
    }
  
} 

console.log(result(num1, num2, mathOp));

