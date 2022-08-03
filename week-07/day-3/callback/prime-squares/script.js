//   1: generate 100 divs to the <section> element and add index numbers to it as the element's textContent

//   2: Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is

//   3: Create a timer that keeps calling the prime validatior function until it reaches the end of elements
//    - the timer should fire every 100ms
//    - the timer should stop when there are no more elements left to be colored

const section = document.getElementsByTagName('section')[0];
for (let index = 0; index < 99; index++) {
  const div = document.createElement('div');
  div.textContent = index + 2;
  section.appendChild(div);
}

let index = 1;
const setClassName = () => {
  if (isPrime(index) && index != 1) {
    section.children[index - 1].className = 'prime';
    index += 1;
    if (index == section.children.length + 1) {
      clearInterval(interval);
    }
  } else if (!isPrime(index) && index != 1) {
    section.children[index - 1].className = 'not-prime';
    index += 1;
    if (index == section.children.length + 1) {
      clearInterval(interval);
    }
  } else {
    index += 1;
  }
}

const interval = setInterval(setClassName, 100);


function isPrime(n) {
  if (n === 1) {
    return false;
  }
  else if (n === 2) {
    return true;
  }
  else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
}