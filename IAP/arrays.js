const arr=[1,2,3,5]

// console.log(arr.unshift(4))
// console.log(arr instanceof Array)
// console.log(arr.slice(1,3))
// arr.splice(0,2);
const newArray=arr.concat([6,7,8]);


// for(const value of newArray){
//     console.log(value)
// }
// arr.forEach((_,index)=>{
//     console.log(index)
// })
console.log(arr.find(num => {return num == this.num }, { num: 2 }));
console.log(arr.every(num=>num>0))
console.log(arr.some(num=>num>2))
console.log(arr.reduce((acc,val)=>acc+val,0))
console.log(arr.reduceRight((acc,val)=>acc+val,0))
console.log(newArray.join(' '))




// 
const fname=Symbol('fname')
const lname=Symbol('lname')
const personThree={
    [fname]:"John",
    [lname]:"Doe"
}
const person={
    fname:"Jane",
    lname:"Doe",
    age:21
}
// console.log('fname' in person)
// console.log(person.hasOwnProperty('fname'));

Object.values(person).forEach((value,index)=>{
    
    try{
        if(index==2){
        console.log(value)
        }
    }catch{
        
    }
    // if(index==1){
    //     console.log(value)
    // }
    // console.log("Running after condition is met")
})

const newObj={...person}
console.log(newObj)
const obj1={a:1,b:2,c:3}
const obj2={c:4,d:4}

const newObject2=Object.assign(obj1,obj2)
console.log(newObject2===obj1)


const myarr=["azhar","email",22]

console.log(JSON.stringify(myarr))

const tester=function(){
    console.log("Hello world")
}()

numbers = [1, 2, 3, 4, 5, 6]

const even=numbers.filter((num)=>num%2==0)
console.log(even)

const complexArray=[[1, 2], [3, 4], [5, 6]]

function arrSum(arr){
    const sum=[]
    arr.map((element)=>{
        const total=element.reduce((acc,val)=>acc+val,0)
        sum.push(total)
    })
    return sum.reduce((acc,val)=>acc+val,0)
}
console.log(arrSum(complexArray))


const arr4=[1,2,3]
const lastElemet=arr4.pop()
arr4.unshift(lastElemet)
console.log(arr4)