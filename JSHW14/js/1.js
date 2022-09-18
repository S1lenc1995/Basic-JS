let btn = document.createElement('button');
btn.textContent = 'New style';
document.body.before(btn);



window.onload = function(){
    if (localStorage.getItem('bgcolor') !== null){
        let color = localStorage.getItem('bgcolor');
        document.getElementsByTagName('body')[0].style.background = color;
    }
    if (localStorage.getItem('mainColor') !== null){
        let mainColor = localStorage.getItem('mainColor');
        document.querySelector('.color').style.color = mainColor
    }

    if(localStorage.getItem("paragraphColor") !== null){
        let pColor = localStorage.getItem("paragraphColor");
        let a = document.getElementsByTagName('p')
            for (let s of a){
                s.style.color = pColor
        

            }
    }

    if(localStorage.getItem('href') !== null){
        let aColor = localStorage.getItem('href');
        let aList = document.getElementsByTagName('a');
        for (let item of aList){
            item.style.color = aColor
        }
    }

    if(localStorage.getItem('liColor') !== null){
        let liColor = localStorage.getItem('liColor');
        let liList = document.getElementsByTagName('li');
        for (let items of liList){
            items.style.background = liColor
        }
    }



}




btn.onclick = function(){
    if (localStorage.getItem('bgcolor') !== null){
        function aaa (){
            localStorage.clear()
            document.location.reload()
            return
    } 
    aaa()
}

   


    else{
    document.getElementsByTagName('body')[0].style.background = 'blue'
    localStorage.setItem('bgcolor', 'blue');

    document.querySelector('.color').style.color = 'red'
    localStorage.setItem('mainColor', 'red')

    let p = document.getElementsByTagName('p')
    for (let paragraph of p){
        paragraph.style.color = 'white'
        localStorage.setItem('paragraphColor', 'white');
    }


    let a = document.getElementsByTagName('a')
    for (let href of a){
        href.style.color = 'green'
        localStorage.setItem('href', 'green');
    }

    let li = document.getElementsByTagName('li')
    for (let lii of li){
        lii.style.background = 'grey'
        localStorage.setItem('liColor', 'grey')
    }
 
    }
}
 
