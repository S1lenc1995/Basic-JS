"use strict"

function createNewUser(){
    let firstName = prompt("Enter your First Name");
    let lastName = prompt ("Enter your Last Name");
    const newUser={
        firstName,
        lastName,
        getLogin(){
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
    };
   
    Object.defineProperty(newUser, 'firstName',{
        writable: true,
        configurable:true,
    
    });
    newUser.setFirstName = function(firstName){
        Object.defineProperty(this, 'firstName', {
            value: firstName});
    }; 
    Object.defineProperty(newUser, 'lastName',{
        writable: true,
        configurable:true,
    
    });
    newUser.setLastName = function(lastName){
        Object.defineProperty(this, 'lastName', {
            value: lastName});
    }; 
    return newUser; 
}


const user = createNewUser();
console.log(user.getLogin());
console.log(user); 





