for(let i=0;i<3; i++){
	const parent = document.querySelector('ol');
	const li= document.createElement('li');
	li.textContent = `List item with i=${i}`;
	parent.append(li);
}

//issues
// Inside the loop we are doing a few expensive code
//1.In every iteration we are appending to the loop
//2. The parent is created in every iteration


const parent = document.querySelector('ol');
const listItemsToAdd = [];

for(let i=0;i<3; i++){
	const li= document.createElement('li');
	li.textContent = `List item with i=${i}`;
	listItemsToAdd.push(li);
}
parent.append(...listItemsToAdd); //using spread operator

//Using a fragment

const parent = document.querySelector('ol');
const fragment = document.createDocumentFragment();
const listItemsToAdd = [];

for(let i=0;i<3; i++){
	const li= document.createElement('li');
	li.textContent = `List item with i=${i}`;
	fragment.append(li);
}
parent.append(fragment); 

//===========================================================================================================
//Removing elements from a node

const listItems = document.querySelectorAll('li');
listItems[0].parentNode.removeChild(listItems[0]);
//OR
listItems[0].remove();

//=============================================================================================================
//Sizes
console.log(window.innerHeight);
console.log(window.innerWidth);

const listItems = document.querySelectorAll('li');
console.log(listItems[0].style.fontSize);

console.log(window.getComputedStyle(listItems[0].fontSize));

//Adding the list item to class big
listItems[0].classList.add('big');
console.log(window.getComputedStyle(listItems[0].fontSize));

// Scrollable container size

const scrollable= document.getElementById("scrollable");
console.log(scrollable.clientHeight);
console.log(scrollable.offsetHeight); 
console.log(scrollable.scrollHeight);
console.log(scrollable.offsetTop);

console.log(scrollable.querySelectorAll('p')[0].offsetTop);
scrollable.querySelectorAll('p')[5].scrollIntoView();

scrollable.scrollTo({
	top: scrollable.querySelectorAll('p')[2].offsetTop,
	behavior:'smooth'
});


