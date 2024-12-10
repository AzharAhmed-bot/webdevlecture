// const practiceData=require('../practice.json')

// console.log(Object.keys(practiceData)[2])


// for (const key in practiceData) {
//     if(key==="skittles"){
//         console.log(key);
//     }
// }


class Person{
     lastname;
     occupation;
     age;
     hobby;
    constructor(person){
        this.lastname=person.lastname;
        this.occupation=person.occupation;
        this.age=person.age;
        this.hobby=person.hobby;
    }
    getPerson(){
        console.log(this);
    }
    getHobby(){
        return this.hobby();
    }


}


const ernie = {
    lastname : 'Doe',
    occupation: 'teacher',
    age: '25',
    eyeColor: 'blue',
    hobby: function(){
        return "Watching TV"
    }
}
const vera = {
    lastname : 'Clay',
    occupation: 'doctor',
    age: '27',
    eyeColor: 'blue',
    hobby: function(){
        console.log('Reading Books');
    }
}

const personOne=new Person(ernie);
personOne.getPerson();
personOne.getHobby();

const personTwo=new Person(vera);
personTwo.getPerson();
personTwo.getHobby();

document.addEventListener('DOMContentLoaded',()=>{
    const mainSection=document.querySelector("#main_section");
    const h1=document.createElement('h1');
    console.log(personOne)
    const hobby=personOne.getHobby();
    console.log(hobby)
    h1.textContent=hobby;
    mainSection.append(h1);


    const selectedAnimal=document.querySelectorAll('input[name="animal"]');

    selectedAnimal.forEach((animal)=>{
        animal.addEventListener('change',()=>{
            getPets(animal.value);
    })
    
    })
   
  
    
    function getPets(animal){

        const xhttp=new XMLHttpRequest();
        xhttp.open("GET",`https://webtest.com/pets/ajaxpets.php?animal=${animal}`,true)
        xhttp.onload=()=>{
            if(xhttp.status==200 && xhttp.readyState==4){
                const data=JSON.parse(xhttp.responseText);
                console.log(data);
            }
            
        }
        xhttp.send()
    }
})
