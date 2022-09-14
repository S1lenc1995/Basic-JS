form = document.querySelector('.password-form')
let p = document.createElement('p');
let firstPassword = document.getElementById('first-password')
let secondPassword = document.getElementById('second-password')
document.querySelectorAll('.input-wrapper')[1].after(p); 


form.addEventListener('click', (event)=>{
    if(event.target.dataset.name =='icon'){
        event.target.classList.toggle('fa-eye-slash')
        if(event.target.classList.contains('fa-eye-slash')){
            event.target.previousElementSibling.setAttribute('type','text');
        }
        if(!event.target.classList.contains('fa-eye-slash')){
            event.target.previousElementSibling.setAttribute('type','password');
        }
    }
    if(event.target.dataset.name == 'button'){
        if(firstPassword.value === secondPassword.value && firstPassword.value !== ''){
            p.innerHTML = ''
           setTimeout(()=>alert("You are wellcome"),10)
        }
        if(firstPassword.value !== secondPassword.value){
            p.innerHTML = 'Your pasword is wrong'
            p.style.color = 'red'
        }
        if(firstPassword.value == '' && secondPassword.value == ''){
            p.innerHTML = ''
            setTimeout(()=>alert("Enter your pasword"),10)
        }
     
    }
})






/* let firstPass = document.querySelector('.first-pass')
let firstIcon = document.querySelector('.icon-password-first')

firstIcon.addEventListener('click', ()=>{
    if (firstPass.getAttribute('type') === 'password'){
        firstPass.setAttribute('type','text');
        firstIcon.classList.add('fa-eye-slash')
    }else{
        firstPass.setAttribute('type', 'password');
        firstIcon.classList.remove('fa-eye-slash')
    }
})


let secondPass = document.querySelector('.second-pass')
let secondIcon = document.querySelector('.icon-password-second')
let p = document.createElement('p');


secondIcon.addEventListener('click', ()=>{
    if (secondPass.getAttribute('type') === 'password'){
        secondPass.setAttribute('type','text');
        secondIcon.classList.add('fa-eye-slash')
    }else{
        secondPass.setAttribute('type', 'password');
        secondIcon.classList.remove('fa-eye-slash')
    }
})

let btn = document.querySelector('.btn')
btn.addEventListener('click', ()=>{
    if (firstPass.value === secondPass.value){
        alert('Your are wellcome') 
       
    } else {
       p.innerHTML = 'Your pasword is wrong'
       p.style.color = 'red'
      
    }
    secondPass.after(p);
})

 */