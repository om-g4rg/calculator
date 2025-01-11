'use strict'

console.log("hello om");

const pop=document.querySelector(`.pop`);
const hidden= document.querySelector(`.hidden`)
const container= document.querySelector(`.form-container`);
const back= document.querySelector(`.back`);
const login = document.querySelector(`.login`);

pop.addEventListener(`click`, function(){
    container.classList.remove(`hidden`);
})
back.addEventListener(`click`, function(){
    container.classList.add(`hidden`);
})