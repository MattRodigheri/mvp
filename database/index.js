var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'asteroids'
});

const saveDate = function(input, callback) {
  connection.query(`insert into dates (date, count) values ("${input.date}", ${input.count});`, function (err, data) {
    if (err) {
      callback(err, null);
    }
  });
}

const getSavedDates = function(callback) {
  connection.query(`select * from dates;`, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
}


module.exports.saveDate = saveDate;
module.exports.getSavedDates = getSavedDates;
