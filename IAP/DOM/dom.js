document.addEventListener('DOMContentLoaded',()=>{
    const hello=document.querySelector('.hello')
    const container=document.querySelector('.container')
    console.log(hello.textContent)
    const newPTag=document.createElement('p')
    newPTag.textContent="Hello World 2"
    newPTag.style.animation='bounce'
    const h2=document.querySelector('.happy')
    h2.setAttribute('id',"happy")

    const addClassList=document.createElement('h3')
    addClassList.textContent="Hello"
    addClassList.classList.add('h3')
    console.log(addClassList)
})

const parent=document.querySelector('.ol');
const fragment=document.createDocumentFragment()
const list=[]
for(let i=0;i<=4;i++){
    const newLi=document.createElement('li')
    newLi.textContent=`Hello ${i}`
    list.push(newLi)
    fragment.append(newLi);
}

console.log(list)
parent.append(fragment);
const li=document.querySelectorAll('li');
parent.removeChild(li[0])

const button=document.querySelector('.button');

function colorPicker(element){
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    element.style.backgroundColor="#"+randomColor;
    console.log(randomColor)

}

button.addEventListener("click",()=>{
    colorPicker(button)
})




