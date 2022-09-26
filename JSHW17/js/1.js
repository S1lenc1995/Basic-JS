

let student = {
    name,
    lastName: null
}

let userName = prompt ('Enter your name');
while(userName === null){
    userName = prompt ('Enter corect your name');
}

let userLastName = prompt ('Enter your Lastname');
while(userLastName === null){
    userLastName = prompt ('Enter corect your name');
}

student.name = userName;
student.lastName = userLastName;



student.table = {};


 let subject
while(subject !== null){
     subject = prompt ('Enter subject name');
    while(subject === ""){
        subject = prompt ('Enter corect subject name')
        student.table = ([`${subject}`])
    let reting = prompt ('Enter your reting');
    while(reting === "" || Number.isNaN(reting)){
    reting = prompt ('Enter corect your reting');
    } 
    student.table = (`[${subject}] : ${reting}`);
    }
    
    
}

console.log(student);
