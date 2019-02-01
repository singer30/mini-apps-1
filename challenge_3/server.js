const express = require('express');
const bodyParser = require('body-parser');

const app = express();







app.set('port', 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('public'));

// app.get('/', function (req, res) {
//   console.log('I am getting?');
// });



app.post('/', function (req, res) {
  console.log(req.body.name);
  //var dbQuery = `insert into customers (name, email, password) values (${req.body.name}, ${req.body.email}, ${req.})`
  res.end();
})

// ${ app.get('port') }





console.log("Listening on port: " + 3000);
app.listen(app.get('port'));

module.exports.app = app;