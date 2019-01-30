const express = require('express');
const parser = require('body-parser');


var port = 3000;
//var path = require('path');


// connect the server to the client folder
const app = express();
app.use(express.static('client'));
app.use(parser());

//var urlencodedParser = parser.urlencoded({ extended: true })
// have the server listen to activity on the port. 

app.post('/', function(req, res) {
// render a new webpage
// redirect the user to the new page. 
// end the response
console.log('I still work', req.body);
    res.end();
})

console.log('listening on:' + ' ' + port);
app.listen(port);

// app.post(`/`, funciton(req, res) {
//     res.send("post request to homepage");
// });

module.exports.app = app;

// use express .method in order to delcare how to handle the different request to the server. exp. app.METHOD(Path, Handler) where path is where you want to go and handler is what you want done. 

// set the poret

// app.METHOD(PATH, HANDLER)


// app.set("port", 3000);

// // app.get method

// app.get('/', function(req, res) {
//     res.send('hello World')
// });



