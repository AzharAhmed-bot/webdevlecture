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


// QUESTION TWO
const classes = {
    class1: { name: "groupA", points: 80 },
    class2: { name: "groupB", points: 75 },
    class3: { name: "groupC", points: 82 }
};


// a.	Write JavScript code to display the name and the point scored.
for(let classItem in classes){
    console.log(`Name \t\t Points`);
    console.log(`${classes[classItem].name} \t\t ${classes[classItem].points}`);
}