let menu_icon = document.getElementById('menu_ico');
let nav = document.getElementsByTagName('nav');
let ham = document.getElementById('ham_nav');
let bar1 = document.getElementById('bar1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');


let w = window.innerWidth;
let menu_flag = 0;

setInterval(() => {
    w>900?flag=0:flag=1;
    w=window.innerWidth;
    if(flag===1){
        menu_icon.classList.add('lowres');
        nav[1].classList.add('vanish');
    }
    else{
        menu_icon.classList.remove('lowres');
        nav[1].classList.remove('vanish');
        ham.style.transform = 'translateX(50em)';
        bar1.style.transform = 'rotate(0deg)';
        bar2.style.transform = 'scaleX(1)';
        bar3.style.transform = 'rotate(0deg)';
        menu_flag = 0;
    }
}, 100);

menu_icon.addEventListener('click', function(){
    if(menu_flag===0){
        ham.style.transform = 'translateX(0)';
        bar1.style.transform = 'rotate(-45deg)';
        bar2.style.transform = 'scaleX(0)';
        bar3.style.transform = 'rotate(45deg)';
        menu_flag = 1;
    }
    else{
        ham.style.transform = 'translateX(50em)';
        bar1.style.transform = 'rotate(0deg)';
        bar2.style.transform = 'scaleX(1)';
        bar3.style.transform = 'rotate(0deg)';
        menu_flag = 0;
    }
});