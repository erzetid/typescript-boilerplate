import './css/main.css';

const switcher = document.querySelector('.btn');

switcher?.addEventListener('click', function (this: HTMLElement) {
  document.body.classList.toggle('dark-theme');
  const className = document.body.className;
  if (className === '') {
    this.textContent = 'Light';
  } else {
    this.textContent = 'Dark';
  }

  console.log('current class name: ' + className);
});
