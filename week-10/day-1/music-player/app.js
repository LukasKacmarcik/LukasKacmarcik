var fs = require('fs');
var mm = require('musicmetadata');

const { promisify } = require('util');
const { resolve } = require('path');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

// create a new parser from a node ReadStream
// var parser = mm(fs.createReadStream('public/audio/toxicity.mp3'), function (err, metadata) {
//   if (err) throw err;
//   console.log(metadata);
// });

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
app.get('/playlist-tracks', getAllTracks);
/////// FRONTEND ENDPOINTS /////////
app.get('/', (req, res) => {
  res.render('main');
});


function getAllTracks(req, res) {
  const sql = 'SELECT * FROM tracks;';
  connection.query(sql, async (error, results) => {
    if (error) {
      res.status(500).json({ error: error });
      return;
    };
    const output = await readSong(results);
    res.status(200).json(output)
  })
};

// function getAllTracks(req, res) {
//   res.json(
//     [
//       {
//         "id": 1,
//         "title": "Purple Drift",
//         "artist": "Untitled artist",
//         "duration": 208,
//         "path": "audio/Organoid_-_09_-_Purple_Drift.mp3"
//       },
//       {
//         "id": 2,
//         "title": "Toxicity",
//         "artist": "SOAD",
//         "duration": 219,
//         "path": "audio/toxicity.mp3"
//       },
//       {
//         "id": 3,
//         "title": "Chop suey",
//         "artist": "SOAD",
//         "duration": 210,
//         "path": "audio/chop suey.mp3"
//       }]
//   )
// };

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

async function getFiles(dir) {
  const subdirs = await readdir(dir);
  const files = await Promise.all(subdirs.map(async (subdir) => {
    const res = resolve(dir, subdir);
    return (await stat(res)).isDirectory() ? getFiles(res) : res;
  }));
  return files.reduce((a, f) => a.concat(f), []);
}

function getSong(path) {
  return new Promise((resolve, reject) => {
    mm(fs.createReadStream(path), function (err, track) {
      if (err) return reject(err);
      track.url = path;
      return resolve(track)
    })
  })
}

async function readSong(results) {
  let output = [];
  for (let i = 0; i < results.length; i++) {
    const song = await getSong(results[i].path);
    output.push(song);
  }
  return output;
}
//<img src=`data:image/png;base64,picture[0].data.toString('base64')` />

module.exports = app;