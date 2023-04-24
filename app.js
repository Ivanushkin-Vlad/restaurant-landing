const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('disp');
});

let btn = document.querySelector(".header-button");
let popupBg = document.querySelector('.popup-bg');
let popup = document.querySelector('.popup-bg-active');
let closeForm = document.querySelector(".close-form");


btn.addEventListener('click',()=>{
    popupBg.classList.add('popup-bg-active');
    popup.classList.add('popup-active-el-form');
    
})

closeForm.addEventListener('click',()=>{
    popupBg.classList.remove('popup-bg-active');
    popup.classList.remove('popup-active-el-form');
})
popupBg.addEventListener('click', (e)=>{
    if(e.target === popupBg){
    popupBg.classList.remove('popup-bg-active');
    popup.classList.remove('popup-active-el-form')
    }
})
AOS.init();

