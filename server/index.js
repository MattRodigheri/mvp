const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const db = require('./../database/index.js');
const key = require('./../nasa-key.js');

app.use(express.static(__dirname + './../client/dist'));
app.use(express.json());

app.get('/asteroids', (req, res) => {
  var date = (req.query.date)
  request(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${key}`, function(err, data) {
    if (err) {
      res.send(err).status(500);
      console.log(err)
    } else {
      res.send(JSON.parse(data.body))
    }
  })
})

app.get('/savedDates', (req, res) => {
  db.getSavedDates((err, data) => {
    if (err) {
      console.log(err)
      res.send(err).status(500);
    } else {
      res.send(data);
    }
  });
})

app.post('/savedDates', (req, res) => {
  db.saveDate(req.body, function(err, data) {
    if (err) {
      console.log(err, null);
    }
  });
})


app.listen(3000, () => console.log('listening on port 3000!'));
