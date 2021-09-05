const background = ["0.jpeg", "1.jpeg", "2.jpeg"];
const randomBackground =
  background[Math.floor(Math.random() * background.length)];
document.body.style.backgroundImage = `url('img/${randomBackground}')`;

