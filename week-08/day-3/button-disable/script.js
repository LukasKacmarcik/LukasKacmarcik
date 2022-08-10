const loveCatsButton = document.querySelector('#love-cats');
const signUpButton = document.querySelector('#sign-up');
const dogRadio = document.querySelector('#dog')
const catRadio = document.querySelector('#cat')
const fishRadio = document.querySelector('#fish')
const yes = document.querySelector('#yes');
const form = document.querySelector('form');

form.addEventListener('click', (e) => {
  if (dogRadio.checked || catRadio.checked || fishRadio.checked) {
    console.log('halooo');
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }

  if (yes.checked) {
    loveCatsButton.disabled = false;
  } else {
    loveCatsButton.disabled = true;
  }

  if (e.target == loveCatsButton) {
    alert('Thank you, you\'ve successfully signed up for cat facts')
  }

  if (e.target == signUpButton && fishRadio.checked && !yes.checked) {
    alert('Sigh, we still added you to the cat facts list')
  }
});

