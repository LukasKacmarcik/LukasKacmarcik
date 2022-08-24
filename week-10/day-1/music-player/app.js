const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
app.use(express.json());

const connection = require('./db');
app.set('view engine', 'ejs');
app.use(express.static('public'));

/////// BACKEND ENDPOINTS /////////
app.get('/playlists', getPlaylists);
app.get('/playlist-tracks/', getPlaylistTracks);
/////// FRONTEND ENDPOINTS /////////
app.get('/', (req, res) => {
  res.render('main');
})


function getPlaylistTracks(req, res) {
  res.json(
    [
      {
        "id": 1,
        "title": "Purple Drift",
        "artist": "Untitled artist",
        "duration": 208,
        "path": "audio/Organoid_-_09_-_Purple_Drift.mp3"
      },
      {
        "id": 2,
        "title": "Toxicity",
        "artist": "SOAD",
        "duration": 219,
        "path": "audio/toxicity.mp3"
      },
      {
        "id": 3,
        "title": "Chop suey",
        "artist": "SOAD",
        "duration": 210,
        "path": "audio/chop suey.mp3"
      }]
  )
};

function getPlaylists(req, res) {
  res.json([
    { "id": 1, "title": "Favorites", "system_rank": 1 },
    { "id": 2, "title": "Music for programming", "system_rank": 0 },
    { "id": 3, "title": "Driving", "system_rank": 0 },
    { "id": 5, "title": "Fox house", "system_rank": 0 },
  ])
};

function conQuery(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        console.log(error);
        reject("ConQuery rejected")
        return;
      }
      return resolve(results);
    })
  })
};

module.exports = app;