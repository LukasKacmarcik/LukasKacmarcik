const imgs = [
  {
  title: 'Forest',
  description: 'Some forest on tha picture pretty cool if u ask me love those colors and the sun pushing throug is just spot on for some 5 min break and filosofical thoughts about life',
  src: './img/forest.jpg',
  isSelected: 'not-selected'
  },
  {
  title: 'Lake',
  description: 'A bit of depresion comming from this one althoug life can somethimes be just like this picture. It is time to chillax and get some energy back for the brighter future.',
  src: './img/lake.jpg',
  isSelected: 'not-selected'
  },
  {
  title: 'Sun',
  description: 'Finaly something filled with energy, righnt now it look pretty grim outside so at least this pic is saving the day :)',
  src: './img/sun.jpg',
  isSelected: 'not-selected'
  },
  {
  title: 'Tunel',
  description: 'Yes yes tunel look pretty cool but my friend browser would say that point of it is 404, I like blue light inside though very useful in case that train go of track and wants to jump back on',
  src: './img/tunel.jpg',
  isSelected: 'not-selected'
  }
]

///creating elements from imgs (arr)/////////////////
const tumbnail = document.getElementById('thumbnail');
for (let i = 0; i < imgs.length; i++) {
  const newImg = document.createElement('img');
  newImg.setAttribute('src', imgs[i].src);
  newImg.setAttribute('alt', `picture of ${imgs[i].title}`);
  newImg.setAttribute('onclick', `setFromThumbnail(${i})`);
  newImg.setAttribute('class', imgs[i].isSelected);
  thumbnail.appendChild(newImg);
}
///GETING ELEMENTS FROM THUMBNAIL///
let thumbnailImages = thumbnail.children;


///seting main////////////////
let currentIndex = 0;
let previousIndex = 0;

let mainPicture = document.getElementById("main-picture");
let title = document.getElementById("img-title")
let description = document.getElementById('description-text');
///seting main picture function///
function setCurrentPicture() {
  if (previousIndex >= 0) {
    thumbnailImages[previousIndex].className = 'not-selected';
  }
  thumbnailImages[currentIndex].className = 'selected';
  mainPicture.setAttribute('src', imgs[currentIndex].src);
  title.textContent = imgs[currentIndex].title;
  description.textContent = imgs[currentIndex].description;
};
///at start set main pic to first//////////////
setCurrentPicture(currentIndex);
///SETTING THUMBNALI FUNCTION///
function setFromThumbnail(index) {
  currentIndex = index;
  setCurrentPicture();
  previousIndex = currentIndex;
};
///seting arrows///////////////////
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');
///create events for arrows///
function leftArrowFn() {
  if (currentIndex == 0){
    currentIndex = imgs.length - 1;
  } else {
    currentIndex -= 1;
  }
  setCurrentPicture();
  previousIndex = currentIndex;
};

function rightArrowFn() {
  if (currentIndex == imgs.length - 1){
    currentIndex = 0;
  } else {
    currentIndex += 1;
  }
  setCurrentPicture();
  previousIndex = currentIndex;
};