document.addEventListener('DOMContentLoaded',()=>{
    const hello=document.querySelector('.hello')
    const container=document.querySelector('.container')
    console.log(hello.textContent)
    const newPTag=document.createElement('p')
    newPTag.textContent="Hello World 2"
    newPTag.style.animation='bounce'
    const h2=document.querySelector('.happy')
    h2.setAttribute('id',"happy")

    const addClassList=document.createElement('h3')
    addClassList.textContent="Hello"
    addClassList.classList.add('h3')
    console.log(addClassList)
})

const parent=document.querySelector('.ol');
const fragment=document.createDocumentFragment()
const list=[]
for(let i=0;i<=4;i++){
    const newLi=document.createElement('li')
    newLi.textContent=`Hello ${i}`
    list.push(newLi)
    fragment.append(newLi);
}

console.log(list)
parent.append(fragment);
const li=document.querySelectorAll('li');
parent.removeChild(li[0])

const button=document.querySelector('.button');

function colorPicker(element){
    const randomColor = Math.floor(Math.random()*16777215).toString(16)
    element.style.backgroundColor="#"+randomColor;
    console.log(randomColor)

}

button.addEventListener("click",()=>{
    colorPicker(button)
})


document.addEventListener('DOMContentLoaded',()=>{
    const radioButtons=document.querySelectorAll("#radioButtons")
    for(let i=0;i<=radioButtons.length;i++){
        radioButtons[i].addEventListener('change',()=>{
            const animalType=radioButtons[i].value;
            fetchUsingAjax(animalType);
        })
    }

    function fetchUsingAjax(animalType){
        const xhttp=new XMLHttpRequest();
        xhttp.open("GET",`https://webtest.com/pets/ajaxpets.php?animal=${animalType}`,true)
        xhttp.onload=()=>{
            if(xhttp.status==200 && xhttp.readyState==4){
                const data=JSON.parse(xhttp.responseText);
                console.log(data);
            }
        }
        xhttp.send()
    }
    const books = [
        {
        title: "A Design Patterns: Elements of Reusable Object-Oriented Software",
        img: "img/media/design_patterns.jpg",
        genre: "Tech",
        format: "Paperback",
        year: 1994,
        category: "Books",
        authors: [
        "Erich Gamma",
        "Richard Helm",
        "Ralph Johnson",
        "John Vlissides"
        ],
        publisher: "Prentice Hall",
        isbn: "978-0201633610"
        },
        {
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        img: "img/media/clean_code.jpg",
        genre: "Tech",
        format: "Ebook",
        year: 2008,
        category: "Books",
        authors: [
        "Robert C. Martin"
        ],
        publisher: "Prentice Hall",
        isbn: "978-0132350884"
        }
        ]

    books.map(book=>{
        const div=document.createElement('div');
        const img=document.createElement('img');
        img.src=book.img;
        const title=document.createElement('h2');
        title.textContent=book.title;
        const genre=document.createElement('p');
        genre.textContent=book.genre;
        const format=document.createElement('p');
        format.textContent=book.format;
        const year=document.createElement('p');
        year.textContent=book.year;
        const category=document.createElement('p');
        category.textContent=book.category;
        const authors=document.createElement('p');
        authors.textContent=book.authors.map((author)=>author).join(', ')
        const publisher=document.createElement('p');
        publisher.textContent=book.publisher;
        const isbn=document.createElement('p');
        isbn.textContent=book.isbn;
        div.append(img,title,genre,format,year,category,authors,publisher,isbn);
        document.body.append(div)
    })
})

