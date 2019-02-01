const express = require('express');
const app = express();

app.set('port', 3000);


app.use(express.static('./client/dist/'));


app.listen(app.get('port'), () => {
  console.log(`listening on ${app.get('port')}`);
});




