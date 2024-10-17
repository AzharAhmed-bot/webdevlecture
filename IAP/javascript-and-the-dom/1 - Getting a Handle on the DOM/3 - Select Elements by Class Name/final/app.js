const btnUpdate = document.getElementById('btn-main');
const headline = document.getElementById('headline');
const items = document.getElementsByTagName('li');
const highlights = document.getElementsByClassName('highlight');

for ( const highlight of highlights ) {
  highlight.style.backgroundColor = 'cornsilk';
}

for (let i = 0; i < items.length; i++) {
  items[i].style.color = 'orchid';
}

btnUpdate.addEventListener('click', () => {
  headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';													 
});
