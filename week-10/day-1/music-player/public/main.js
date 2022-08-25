const currentSong = document.querySelector('#currentSong');
const backBtn = document.querySelector('#back');
const playPauseBtn = document.querySelector('#playPause');
const fowardBtn = document.querySelector('#forward');
const progressContainer = document.querySelector('#progressContainer');
const currProgress = document.querySelector('#currProgress');
const shuffleBtn = document.querySelector('#shuffle');
const volumeContainer = document.querySelector('#volumeContainer');
const currentVolume = document.querySelector('#currentVolume');
const songCurrentTime = document.querySelector('#currentTime');
const songDuration = document.querySelector('#duration');

const songs = document.querySelector('#songs');
const playlists = document.querySelector('#playlists');

playPauseBtn.addEventListener('click', (e) => {
  if (currentSong.className == 'pause') {
    currentSong.play();
    currentSong.className = 'play';
    playPauseBtn.src = "./img/pause.svg"
  } else if (currentSong.className == 'play') {
    currentSong.pause();
    currentSong.className = 'pause';
    playPauseBtn.src = "./img/play.svg"
  }
});

currentSong.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

volumeContainer.addEventListener('click', setVolume);

loadPlaylists();
loadSongs();


function loadPlaylists() {
  fetch('/playlists')
    .then(res => res.json())
    .then(dataPlaylists => {
      dataPlaylists.forEach(playlist => {
        const newPlaylistName = document.createElement('p');
        newPlaylistName.className = 'playlistName';
        newPlaylistName.textContent = playlist.title;
        const newPlaylist = document.createElement('div');
        newPlaylist.className = 'playlist';

        newPlaylist.appendChild(newPlaylistName);

        playlists.appendChild(newPlaylist);
      });
    })
};

function loadSongs() {
  fetch(`/playlist-tracks`)
    .then(res => res.json())
    .then(dataSongs => {
      let counter = 1;
      dataSongs.forEach(song => {
        const newIndex = document.createElement('p');
        const newTitle = document.createElement('p');
        const newAuthor = document.createElement('p');
        const newDuration = document.createElement('p');
        newIndex.textContent = counter;
        newIndex.className = 'index';
        newTitle.textContent = song.title;
        newTitle.className = 'title';
        newAuthor.textContent = `(${song.artist})`;
        newAuthor.className = 'author';
        newDuration.textContent = formatTime(song.duration);
        newDuration.className = 'duration';
        const newSong = document.createElement('div');
        newSong.className = 'song';

        counter++;

        newSong.appendChild(newIndex);
        newSong.appendChild(newTitle);
        newSong.appendChild(newAuthor);
        newSong.appendChild(newDuration);

        songs.appendChild(newSong);
      });
    })
};

function setVolume(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;

  currentSong.volume = (clickX / width);
  currentVolume.style.width = `${(clickX / width) * 100}%`
};

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  currProgress.style.width = `${progressPercent}%`;

  songDuration.textContent = `${formatTime(currentSong.duration)}`;
  songCurrentTime.textContent = formatTime(currentSong.currentTime);
};

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = currentSong.duration;

  currentSong.currentTime = (clickX / width) * duration;
};

function formatTime(timeInSeconds) {
  let minutes = Math.floor(timeInSeconds / 60);
  minutes = (minutes >= 10) ? minutes : "0" + minutes;
  let seconds = Math.floor(timeInSeconds % 60);
  seconds = (seconds >= 10) ? seconds : "0" + seconds;
  return minutes + ":" + seconds;
};