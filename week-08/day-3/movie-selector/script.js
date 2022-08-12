// const movies = [
//   {
//     title: 'Moon',
//     genre: 'Sci-fi'
//   },
//   {
//     title: '2001: A Space Odyssey',
//     genre: 'Sci-fi'
//   },
//   {
//     title: 'Darkest Hour',
//     genre: 'Drama'
//   },
//   {
//     title: 'There Will Be Blood',
//     genre: 'Comedy'
//   },
//   {
//     title: 'American Beauty',
//     genre: 'Drama'
//   },
//   {
//     title: 'Airplane!',
//     genre: 'Drama'
//   },
//   {
//     title: 'Deadpool',
//     genre: 'Comedy'
//   },
//   {
//     title: 'Wayne\'s World',
//     genre: 'Comedy'
//   }
// ]
const layout = document.querySelector('#layout');
const genreSelector = document.querySelector('#genres');
const movieSelector = document.querySelector('#movies');
const span = document.querySelector('#answer');

genreSelector.addEventListener('change', (e) => {
  const selectedGenre = genreSelector.value;
  const allMoviesByGenres = document.querySelectorAll(`#movies optgroup`);
  allMoviesByGenres.forEach(group => {
    group.hidden = true;
    if (group.label == selectedGenre) {
      group.hidden = false;
    }
  })
})

movieSelector.addEventListener('change', () => {
  span.textContent = movieSelector.value;
})