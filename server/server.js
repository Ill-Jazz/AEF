const express = require('express'); //JS backend server
const bodyParser = require('body-parser'); //understands http data
const app = express(); 

const PORT = 6969;

//boilerplate
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

// All request from anywhere -> assign functions request, response, next step
app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});

//read/write to and from JSON file
let allFriends = [{fName: 'Coach', lName: 'Tim', email: 'tim.broos@becode.org', phone: '0469420666', signatureMove: 'Yeet', language: 'Javascript'}];

// Below you can define how your API handles a get or a post request.
// Try sending a get request to the root, you should get a "Hello from server" back.



app.get('/', function (request, response) {
    response.send('Hello from server');
});

app.post('/', function (request, response) {
    response.status(200).send({"message": "Data received"});
});

//200 = http code for all good xd
//google -> intro express for more research

app.listen(PORT, function () {});
