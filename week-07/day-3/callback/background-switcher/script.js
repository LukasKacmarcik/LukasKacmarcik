// 1: Create a function that updates the <body> elements background-image's css property
// 2: The image value should be https://loremflickr.com/g/1280/800/hungary/
// 3: Make sure every time you refresh the image, you add a cachebuster
// WTF is a cachebuster?
// http://www.adopsinsider.com/ad-ops-basics/what-is-a-cache-buster-and-how-does-it-work/

// 4: Create a timer function that refreshes the background every 5 seconds

//const body = document.getElementsByTagName('body')[0];
const updateCssProperty = () => {
  let randomNum = Math.random() * 10000000000000000;
  document.getElementsByTagName('body')[0].style.backgroundImage = `url(https://loremflickr.com/g/1280/800/hungary/?${randomNum})`;
}
setInterval(updateCssProperty, 5000);