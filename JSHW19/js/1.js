
let workers = [2,5,9];
let job = [3,6,5];
let deadline = new Date(2022, 10, 23);


function exersise (workers, job, deadline){
    let doneWorkDay = workers.reduce(function(previousValue, value){
        return previousValue + value
    }) 
    console.log(doneWorkDay)
}



exersise(workers);