const btnUpdate = document.querySelector('.btn-main');

btnUpdate.addEventListener('click', () => {
  const headline = document.getElementById('headline');													 
  const input = document.querySelector('.input-main');

  headline.textContent = input.value;
  input.value = '';
});
