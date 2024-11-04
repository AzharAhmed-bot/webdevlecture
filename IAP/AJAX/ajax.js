document.addEventListener("DOMContentLoaded",()=>{
// It uses the xhhtpRequest to send a get request
function sendGET(){
    //1.  Create the instance of the request
    let xhttp=new XMLHttpRequest()
    // Open the connection
    xhttp.open("GET","http://localhost:3001/api/data",true);
    xhttp.setRequestHeader("Accept", "application/json");

    //4.  Handle the response
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var data=JSON.parse(this.responseText);
            console.log(data);
        }
    }

    //2.  Check the connection is established
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
    //3.  Send the request to the backend server
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

