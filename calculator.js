'use strict'

const inputBtn=document.querySelectorAll(`.btn`);
const inputBox=document.querySelector(`.input`);
const outBox= document.querySelector(`.output`);
const clearBtn=document.querySelector(`#clear`);
const deleteBtn=document.querySelector(`#delete`);
const addBtn=document.querySelector(`#add`);
const ansBtn=document.querySelector(`#equal`);


let globalVal=0;

inputBtn.forEach(element => {
    element.addEventListener(`click`, function(){
        inputBox.textContent=`${inputBox.textContent}${element.textContent}`;
    })
});
clearBtn.addEventListener(`click`, function(){
    inputBox.textContent=``;
})
deleteBtn.addEventListener(`click`, function(){
    inputBox.textContent= inputBox.textContent.slice(0,-1);
})
ansBtn.addEventListener(`click`, function(){
    globalVal+= parseFloat(inputBox.textContent);
    console.log(globalVal);
    outBox.textContent=`${outBox.textContent}${inputBox.textContent}= ${globalVal}`;
    inputBox.textContent=``;
})


//-------------------------------------------
addBtn.addEventListener(`click`, function(){
    if(inputBox.textContent!=``){
        globalVal+=parseFloat(inputBox.textContent);
        console.log(globalVal);
        outBox.textContent=`${outBox.textContent}${inputBox.textContent}+`;
        inputBox.textContent=``;
    }
})