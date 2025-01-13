'use strict'

const popup=document.querySelector(`.back`);
const inputBtn=document.querySelectorAll(`.btn`);
const opBtn=document.querySelectorAll(`.char`);
const inputBox=document.querySelector(`.input`);
const outBox= document.querySelector(`.output`);
const clearBtn=document.querySelector(`#clear`);
const deleteBtn=document.querySelector(`#delete`);
const addBtn=document.querySelector(`#add`);
const ansBtn=document.querySelector(`#equal`);
const saveBtn=document.querySelector(`#save`);
const closeBtn= document.querySelector(`.close`);
const storeRes= document.querySelector(`.result`);

inputBox.textContent=``;
outBox.textContent=``;


inputBtn.forEach(element => {
    element.addEventListener(`click`, function(){
        inputBox.textContent=`${inputBox.textContent}${element.textContent}`;
       })
});


opBtn.forEach(element => {
    element.addEventListener(`click`, function(){
        if(inputBox.textContent!=`` & inputBox.textContent.charAt(inputBox.textContent.length-1)!=`+` & inputBox.textContent.charAt(inputBox.textContent.length-1)!=`-`& inputBox.textContent.charAt(inputBox.textContent.length-1)!=`*`&inputBox.textContent.charAt(inputBox.textContent.length-1)!=`/`){
        inputBox.textContent=`${inputBox.textContent}${element.textContent}`;
        }
    })
});


clearBtn.addEventListener(`click`, function(){
    inputBox.textContent=``;
    outBox.textContent=``;
})
deleteBtn.addEventListener(`click`, function(){
    inputBox.textContent= inputBox.textContent.slice(0,-1);
})

ansBtn.addEventListener(`click`, function(){
    const str=inputBox.textContent;
    outBox.textContent=`= ${eval(str)}`;
})

closeBtn.addEventListener(`click`, function(){
    popup.classList.add(`hidden`);
})
//-------------------------------------------

saveBtn.addEventListener(`click`, function(){
    if(popup.classList.contains(`hidden`)){
        popup.classList.remove(`hidden`);
        storeRes.textContent=outBox.textContent;
    }
})
