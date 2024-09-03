console.log("Hello world");

document.addEventListener('DOMContentLoaded',()=>{
    const p=document.getElementById('paragraph');
    const button=document.querySelector('button');
    const todo=document.querySelector('ol');
    const input=document.querySelector('input');
    button.addEventListener('click',()=>{
        const innerText=input.value;
        const newList=document.createElement('li');
        newList.innerHTML=innerText;
        todo.append(newList);
    });

    const interval=setInterval(1000);
    const name=prompt("What is your name?");
    console.log("Hello" +name);
})

// Vanilla Javascript;