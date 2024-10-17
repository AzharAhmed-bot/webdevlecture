const btnUpdate = document.getElementById('btn-main');
const headline = document.getElementById('headline');

btnUpdate.addEventListener('click', () => {
  headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';													 
});
