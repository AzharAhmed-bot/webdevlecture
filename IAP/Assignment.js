const { start } = require("repl");

// QUESTION ONE
const students = [
    { name: "Jane Doe", course: "Eng", marks: 80},
    { name: "John Doway", course: "Eng", marks: 70 },
    { name: "Peter Kamau", course: "Eng", marks: 50}
];

// a.	Display the student name and their grade
students.map((student)=>{
    console.log("Name \t\t Grade");
    console.log(`${student.name} \t ${student.marks}`);
});

// b.	Update the grade of Jane Doe to 100
const janeDoe=students.find((student)=>student.name==="Jane Doe");
if(janeDoe){
    janeDoe.marks=100
}

// c.	Calculate the total marks scored by all students
const studentMarks=students.map((student)=>student.marks).reduce((acc,value)=>acc+value,0);
console.log(studentMarks);

// d.	Find a student named Jane and update her marks
const janeDoeTwo=students.find((std)=>std.name==="Jane Doe");
if(janeDoeTwo){
    janeDoeTwo.marks=80
}

// e.	Display the names of all students who scored 70
const stdGreaterThanSeventy=students.filter((std)=>std.marks===70)
stdGreaterThanSeventy.map((std)=>{
    console.log("Student greater than 70");
    console.log("Name \t\t Grade");
    console.log(`${std.name} \t ${std.marks}`);
})

// f.	Display all unique names of students
const uniqueNames=students.map((std)=>std.name)
console.log(uniqueNames);


// // QUESTION TWO
const classes = {
    class1: { name: "groupA", points: 80 },
    class2: { name: "groupB", points: 75 },
    class3: { name: "groupC", points: 82 }
};


// // a.	Write JavScript code to display the name and the point scored.
// for(let classItem in classes){
//     console.log(`Name \t\t Points`);
//     console.log(`${classes[classItem].name} \t\t ${classes[classItem].points}`);
// }

for(let item in classes){
    console.log(classes[item].name)
}


const person={
    name:"Azhar",
    school:"Strathmore",
    age:18,
}

const salary=Symbol("salary");
person[salary]="200000";
console.log(person)

const person2={...person}
console.log(person2)

function changingAnObject(object,key,value){
    const newObject={...object};
    newObject[key]=value
    return newObject
}

// Value of
// To string
// Object functions
// Object prototype
// THIS

const object={
    name:"Azhar",
    school:"Strathmore",
    age:18
}
console.log(object.toString())
// OBJECT TO JSON
const myJSON=JSON.stringify(object);
// JSON TO OBJECT
const myObject=JSON.parse(myJSON)

// Object definition using functions
function Car(brand,color){
    this.brand=brand
    this.color=color
}

Car.prototype.engine=function(){
    console.log("Engine is running")
}

const toyota=new Car("Toyota","Red");
console.log(toyota.brand);
console.log(toyota.color);
toyota.engine();
// THIS Keyword refers to the current object


const finding=[1,2,4,5,6,7,8];
const number= 1 || 2 || 3;
switch(number){
    case 1:
        console.log("Hello")
        break;
    case 2:
        console.log("World")
        break;
    default:
        console.log("I am here")
}


//  FUNCTIONS:
// A function is a block of code 
// WHEN YOU DEFINE FUNCTIONS : SCOPE
// 1. GLOBAL SCOPE
// 2. FUNCTIONAL SCOPE
// 3. LEXICAL SCOPE
// IT DOESN'T MATTER WHERE A FUNCTION WAS DECLARED IT MATTERS WHERE IT IS INVOKED(CALLING)
// TYPE OF FUNCTIONS
// 1. PURE FUNCTION
// 2. FIRST CLASS FUNCTION - ( CALLBACK FUNCTION)- (FUNCTION EXPRESSIONS)
// 3. HIGH ORDER FUNCTIONS
// WHAT ARE FUNCTIONS MADE UP OF
// 1. NAME- ANONYMOUS
// 2. PARAMETER
// 3. BODY- FUNCTIONAL SCOPE
// 4. RETURN VALUE

// INVOKED
starter();

// GLOBAL SCOPE
const numberFive=5;
// DECLARED
function starter(){
    // FUNCTIONAL SCOPE
    const numberFour=4;
    for(let i=0;i<10;i++){
        // LEXICAL SCOPE
        console.log(i);
    }
    return numberFive;
}



function add(a,b){
    const result=a+b;
    return result
}
const add2=function(a,b){
 return a+b
}(1,2) // IMEDIATELY INVOCATION FUNCTION EXPRESSION



console.log(add(1,2));


