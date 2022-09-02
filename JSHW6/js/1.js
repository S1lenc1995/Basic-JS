"use strict"

function createNewUser(){
    let firstName = prompt("Enter your First Name");
    let lastName = prompt ("Enter your Last Name");
    let birthday = prompt("Enter your birthday", `dd.mm.yyyy`);


    const newUser={
        firstName,
        lastName,
        birthday,
        getAge(){
            let today = new Date();
            let day = this.birthday.slice(0,2);
            let month = this.birthday.slice(3,5);
            let year = this.birthday.slice(6)
            let age = today.getFullYear() - year;
            if(month > today.getMonth() || (month === today.getMonth() && day > today.getDay())){
                age--
            }

            

            return age;

        },
        getPassword(){
            return ((this.firstName[0].toUpperCase()) + (this.lastName.toLowerCase()) + (this.birthday.slice(6)));

        },
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
console.log(user.getAge());
console.log(user.getPassword());






