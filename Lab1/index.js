console.log("Hello World")

function subtract(num1, num2){
    const result= num1-num2;
    console.log(result);
    return result;
}

const numbers=[
    [1,2,3,4],
    [5,6,7],
    [8,9,10,11]
]
const students=[
    {
        name:"Mary",
        age:10,
        grades:[90,88,95]
    },
    {
        name:"Joseph",
        age:11,
        grades:[80,100,96]
    }
]






const arraySum = function(numbers) {
    const sum=[]
    numbers.map((myArray)=>{
        const total= myArray.reduce((acc,value)=>(acc+value),0);
        sum.push(total);
    })
    return sum;

}


const getAverage=()=>{
    const average=[]
    students.map((student)=>{
       const total=student.grades.reduce((acc,value)=>(acc+value),0);
       let myAverage=total/student.grades.length;
       average.push(myAverage);
    })
    return average;
}





subtract(4,2);
console.log(arraySum(numbers));
console.log(getAverage(students));


var randomColor=()=>{
    var randomValue=()=>{
        return Math.round(Math.random()*255);
    }
    return 'rgb('+randomValue()+","+randomValue()+","+randomValue()
}


document.addEventListener("DOMContentLoaded",()=>{
    const redElements=document.querySelectorAll(".red")
    redElements.forEach((element)=>{
        element.style.color="red";
    })
    const todoUL=document.querySelector(".todoList")
    const todoInput=document.querySelector("#todo");
    const button=document.querySelector("#addTodo");
    button.addEventListener("click",()=>{
        const newTodo=todoInput.value;
        const newLi=document.createElement("li")
        newLi.innerHTML=newTodo
        todoUL.appendChild(newLi);
    })

    const randomColorButton=document.querySelector(".random-color");
    const body=document.querySelector(".body");

    randomColorButton.addEventListener("click",()=>{
        body.style.color=randomColor()
    })

})







