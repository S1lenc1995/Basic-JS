"use strict"
let name = prompt("What is your name?", "" );
let age = +prompt("What is your age?");

while (name === null || 
      name ===0 || 
      age ===0 ||  
      age>200  ||
      Number.isNaN(age)||
      name.length===0 ||
      age.length===0  )
      {
      name = prompt('Send corect name', `${name}` );
      age = +prompt('Send corect age', `${age}` );
}

 if (age<18){
    alert("You are not allowed to visit this website");
} else if (age>=18 && age<=22){
    let answer = confirm("Are you sure you want to continue?");
    if (answer === true){
        alert(`Welcome ${name}`);
    }
    else {
        alert("You are not allowed to visit this website");
    }
} else {
    alert(`Welcome ${name}`);
 } 

