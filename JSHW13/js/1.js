let galery = document.querySelectorAll('.image-to-show')
let wrap = document.querySelector(".images-wrapper")
let timer
let time 
let counter = 0;


let playButton = document.createElement('button');
wrap.after(playButton);
playButton.innerHTML = 'play'
playButton.onclick = test


let stopButton = document.createElement('button');
wrap.after(stopButton);
stopButton.innerHTML = 'stop'
stopButton.onclick = function(){
    clearInterval(timer);
}



function test(){
    clearInterval(timer)
    timer = setInterval( function aaa (){
        if( !galery[counter].classList.contains('hiden')){
            galery[counter].classList.add('hiden');
        }
       counter++
       if(counter>3){
        counter = 0
    }
       galery[counter].classList.remove('hiden');
       
    
    }, 3000)
}
test()


let p = document.createElement('p')
wrap.after(p);

let second = 3;
let milisecond = 0;


function timerr(){
    milisecond--
    if(milisecond<0){
    second--
    milisecond = 99
    p.innerHTML = `${second}:${milisecond}`
    }
    if(milisecond<=99){
        p.innerHTML = `${second}:${milisecond}`
    }


    if((second<1 && milisecond<1)){
        clearInterval(time)
    }
}

time = setInterval(timerr, 10) 



