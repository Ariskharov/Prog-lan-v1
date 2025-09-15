document.body.style.color = '#fff';

const style = document.createElement('style');
style.textContent = `
@keyframes rainbowShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
body {
  background: linear-gradient(270deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #8b00ff);
  background-size: 1400% 1400%;
  animation: rainbowShift 6s linear infinite;
}
`;
document.head.appendChild(style);

alert('Добро пожаловать!');

const userName = prompt('Введите ваше имя:');

const heading = document.createElement('h1');
heading.textContent = userName && userName.trim() !== '' ? `Привет, ${userName}!` : 'Привет!';
document.body.appendChild(heading);

