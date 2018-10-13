const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');
const db = require('./../database/index.js');
const key = require('./../nasa-key.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + './../client/dist'));

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


app.listen(3000, () => console.log('listening on port 3000!'));
