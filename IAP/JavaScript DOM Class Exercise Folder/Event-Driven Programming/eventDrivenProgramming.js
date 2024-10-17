const button = document.querySelector('button');
//button.addEventListener('click',onClick);
//button.addEventListener('click',onClick2);


function onClick(){
	console.log('You have clicked the button');
}


// Example 2 :  //////////////////////////////////////////////////////////////////////////////////////

function onClick2(event){
	console.log(event);
	console.log(event.type);
	console.log(event.target);
	console.log(this); 
	console.log("Button clicked")
}


function onClick3(event){
	console.log(event.target);
	console.log(this); 
	
}

// Add an event Listener to the body
//document.body.addEventListener('click',onClick3);

//Remove Event Listener
//button.removeEventListener('click',onClick3);

//Other Clicks : mouseup, mousedown, dblclick

//KEY EVENTs ==============================================================================================

window.addEventListener('keydown', event => {
	console.log(event.code);
});


//DRAG Event============================================================================================

button.addEventListener('dragstart',event => {
	console.log(event);
});

scrollable.addEventListener('drop',event=>{
	scrollable.prepend(button);
});

scrollable.addEventListener('dragover',event=>{
	event.preventDefault();
});



