// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x
const candies = document.querySelector('.candies');
const lollypops = document.querySelector('.lollypops');
const speed = document.querySelector('.speed')
let rate = 0;
let numOfLollypops = 0;
let count = 0;
const updateRate = () => {
  rate = Math.floor(numOfLollypops / 10);
  speed.textContent = rate;
}

const changeCandiesAmount = (addCount) => {
  const temp = parseInt(candies.textContent) + addCount;
  candies.textContent = `${temp}`;
}

const body = document.querySelector('body');
body.addEventListener('click', (e) => {
  if (e.target.className == 'create-candies') {
    changeCandiesAmount(1);
  } else if (e.target.className == 'buy-lollypops' && parseInt(candies.textContent) >= 100) {
    changeCandiesAmount(-100);
    numOfLollypops++;
    lollypops.textContent += '🍭';
    updateRate();
  } else if (e.target.className == 'candy-machine') {
    clearInterval(baseInterval);
    const rain = setInterval(() => {
      count++;
      if (count == 10) {
        clearInterval(rain);
        baseInterval = setInterval(() => {
          changeCandiesAmount(rate);
        }, 1000);
        count = 0;
      }
      changeCandiesAmount(rate * 10)
    }, 1000)
  }
});

let baseInterval = setInterval(() => {
  changeCandiesAmount(rate);
}, 1000);