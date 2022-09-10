/* let akaliButton = document.querySelector('.akali-button');
let aniviaButton = document.querySelector('.anivia-button');
let dravenButton = document.querySelector('.draven-button');
let garenButton = document.querySelector('.garen-button');
let katarinaButton = document.querySelector('.katarina-button');
 */
const tabs = [...document.querySelectorAll('.tabs-title')];
        const tabsContent = document.querySelectorAll('.tabs-content li');
        console.log(tabsContent)
        tabs.forEach((elem) => elem.addEventListener("click", toggle))
        function toggle(e){
            e.target.closest('ul').querySelector('.active').classList.remove('active');
            e.target.classList.add('active')
            const index = tabs.findIndex(elem => elem.classList.contains("active"));
            showText(index)
        }
        function showText(index) {
            console.log(index);
            tabsContent.forEach(elem => elem.setAttribute("hidden", true));
            tabsContent[index].removeAttribute("hidden");
        }





/*  
let tabs = document.querySelectorAll('.tabs-title');
let list =document.getElementById('main-ul');
list.onclick = function(event){
    if (event.onclick){
        toggle(event.target);
    }else{
        singl(event.target);
    }
}
for(let li of tabs){
    console.log(li);
}

function toggle (li){
        li.classList.toggle('active');
}

function singl(li){
    let selectedItems = document.querySelectorAll('.active');
    for(let item of selectedItems){
        item.classList.remove('active')
    }
    li.classList.add('active')
} 



let paragraphs = document.querySelectorAll('.paragraph')
let paragraph;
for(paragraph of paragraphs){
    console.log(paragraph);
    paragraph.hidden = true;
}
 */

/* akaliButton.addEventListener('click', ()=>{
    document.querySelector('.Akali-paragraph').hidden = false;
    document.querySelector('.Anivia-paragraph').hidden = true;
    document.querySelector('.Draven-paragraph').hidden = true;
    document.querySelector('.Garen-paragraph').hidden = true;
    document.querySelector('.Katarina-paragraph').hidden = true;
})
aniviaButton.addEventListener('click', ()=>{
    document.querySelector('.Akali-paragraph').hidden = true;
    document.querySelector('.Anivia-paragraph').hidden = false;
    document.querySelector('.Draven-paragraph').hidden = true;
    document.querySelector('.Garen-paragraph').hidden = true;
    document.querySelector('.Katarina-paragraph').hidden = true;
})
dravenButton.addEventListener('click', ()=>{
    document.querySelector('.Akali-paragraph').hidden = true
    document.querySelector('.Anivia-paragraph').hidden = true
    document.querySelector('.Draven-paragraph').hidden = false;
    document.querySelector('.Garen-paragraph').hidden = true;
    document.querySelector('.Katarina-paragraph').hidden = true
})
garenButton.addEventListener('click', ()=>{
    document.querySelector('.Akali-paragraph').hidden = true;
    document.querySelector('.Anivia-paragraph').hidden = true;
    document.querySelector('.Draven-paragraph').hidden = true;
    document.querySelector('.Garen-paragraph').hidden = false;
    document.querySelector('.Katarina-paragraph').hidden = true;
})
katarinaButton.addEventListener('click', ()=>{
    document.querySelector('.Akali-paragraph').hidden = true;
    document.querySelector('.Anivia-paragraph').hidden = true;
    document.querySelector('.Draven-paragraph').hidden = true;
    document.querySelector('.Garen-paragraph').hidden = true;
    document.querySelector('.Katarina-paragraph').hidden = false;
})





 */