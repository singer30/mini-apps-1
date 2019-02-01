const express = require('express');
const app = express();

app.set('port', 3000);


app.use(express.static('client'));


app.listen('port', () => {
  console.log(`listening on ${app.get("port")}`);
});




