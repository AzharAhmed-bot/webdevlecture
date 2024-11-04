const promise2=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("I've received data from promise 2");
    },1000)
})
const promise=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("I've received data");
    },1000)
}).then(()=>{
    return promise2;
}).catch(err=>{
    console.log(err);
}).finally(()=>{
    console.log("Promise is completed")
})

const promise3=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("I've received data from promise 3");
    },1000)
})
const promise4=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("I've received data from promise 4");
    },1000)
})
const promise5=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("I've received data from promise 5");
    },1000)
})
// ANY, RACE,ALL
Promise.all([promise2,promise3,promise4,promise5]).then(()=>{
    console.log("All promises have been resolved");
})
Promise.race([promise2,promise3,promise4,promise5]).then((result)=>{
    console.log(result)
})

Promise.any([promise2,promise3,promise4]).then((result)=>{
    console.log(result)
})

console.log(promise);