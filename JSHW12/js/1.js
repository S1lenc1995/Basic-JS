


let wraper = document.querySelector('div')
let buttons = document.querySelectorAll('button')


let enter = document.querySelector('.enter');





window.addEventListener('keyup',(event)=>{
    let active = wraper.querySelector('.active')
   
    for(let div of buttons){
        if (active){
            active.classList.remove('active');
        }
        console.log(div);
        if(event.key.toUpperCase() === div.innerText.toUpperCase()){
            div.classList.add('active');
        }
    }
})
   

