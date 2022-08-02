var display = document.getElementsByClassName('display')[0];
let time = 10;

const button = document.querySelector('button');
button.onclick = () => {
  display.textContent = 'Bomb defused'
  clearInterval(interval);
};

var updateCountdown = () => {
  time -= 1;
  display.textContent = time.toString();
  if (time == 0) {
    display.textContent = 'Bomb exploded';
    clearInterval(interval);
  }
}

const interval = setInterval(updateCountdown, 1000);