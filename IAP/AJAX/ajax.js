document.addEventListener("DOMContentLoaded",()=>{

function sendGET(){
    let xhttp=new XMLHttpRequest()
    xhttp.open("GET","http://localhost:3001/api/data",true);
    xhttp.onload=()=>{
        if(xhttp.status===200){
            var data=JSON.parse(xhttp.responseText);
            console.log(data);
        }else{
            console.log("Error");
        }
    }
    xhttp.onerror=()=>{
        console.log("Error");
    }
    xhttp.send()
}
function sendPOST(){
    let xhttp=new XMLHttpRequest()
    xhttp.open("POST",'http://localhost:3001/api/data',true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    const data={
        name:"John",
        age:"30",
        hobby:"Swimming",
        city:"Chicago"
    }

    xhttp.onload=()=>{
        if(xhttp.status===200){
            var data=JSON.parse(xhttp.responseText);
            console.log(data);
        }else{
            console.log("Error");
        }
    }
    xhttp.onerror=()=>{
        console.log("Error");
    }
    xhttp.send(JSON.stringify(data));
}

// sendPOST()

})

