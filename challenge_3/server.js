express = require('express');

const app = express();

const port = 3000;



app.use(express.static('public'));

app.get('/', function (req, res) {
  console.log('I am getting?');
});

app.post('/', function (req, res) {
  console.log('Am i posting?');
  res.send("yes i am")
  res.end();
})
console.log("Listening on port: " + port);
app.listen(port);







module.exports.app = app;