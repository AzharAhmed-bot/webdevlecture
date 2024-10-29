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

