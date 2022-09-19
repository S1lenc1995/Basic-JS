"use strict"
let num = prompt ('Enter your number');

while(Number.isNaN(+num) || num ===''){
    num = prompt ('Enter corect number', `${num}`);
}

function factorial(a){
    if(a===0){
        return 1;
    }
    else{
        return a*factorial(a - 1);
    }
}


console.log(factorial(num));
  