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

    function Car(brand,DoM){
        this.brand=brand;
        this.DoM=DoM;
      
    }
    
    Car.prototype.age=function(){
        return 2024-this.DoM;
    }
    let car1=new Car("Toyota",2012);
    console.log(Car.prototype);
    console.log(car1.age());

    const eatButton=document.querySelector("#eat");
    eatButton.addEventListener('click',()=>{
        const food=document.querySelector("#foodGroup").value;
        
        alert(`You are eating ${food}`)  

        const foodImage=document.querySelector(`.${food}`)
        if(foodImage){
            foodImage.style.display='none';
        }
    })


})

// Vanilla Javascript;