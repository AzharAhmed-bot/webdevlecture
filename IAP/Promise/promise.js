const promise=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("done")
    },1000)
})
console.log(promise);
promise.then((message)=>console.log(message))