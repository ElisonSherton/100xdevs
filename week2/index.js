const express = require('express');
var bodyParser = require('body-parser');

// Create an express application
const app = express()

// Expose a port which will be listening to all my requests
const port = 4000

function middleware(req, res, next){
    console.log("From Inside Middelware" + req.headers.content);
    next();
}
app.use(middleware);
app.use(bodyParser.json())

// Write a complicated function which is going to do a task and 
// The worls is going to communicate using an HTTP protocol asking for a service
// To run this complicated function using their own inputs
function calcSum(counter){
    let sum = 0;
    for (var i = 0; i <= counter; i++){
        sum += i;
    }
    return sum;
}

function calcMul(counter){
    let mult = 1;
    for (var i = 1; i <= counter; i++){
        mult *= i;
    }
    return mult;
}

// Define callback functions for different methods on the handleSum route
function handle_get_request(req, res){
    var counter = req.query.counter;
    var answer = "Calculated Sum using GET method is " + calcSum(counter);
    res.send(answer);
}

function handle_post_request(req, res){
    // var counter = req.query.counter;
    console.log(req.body);
    var counter = req.query.counter;

    var answerObject = {
        sum:calcSum(counter),
        mul:calcMul(counter)
    }

    var answer = "Calculated Sum using POST method is " + calcSum(counter);
    res.status(200).send(answerObject);
}

function handle_put_request(req, res){
    var counter = req.query.counter;
    var answer = "Calculated Sum using PUT method is " + calcSum(counter);
    res.send(answer);
}

function handle_delete_request(req, res){
    var counter = req.query.counter;
    var answer = "Calculated Sum using DELETE method is " + calcSum(counter);
    res.send(answer);
}

// Callback for the homepage
function started(req, res){
    console.log(`Listening on port ${port}`);

}

function givePage(req, res){
    res.send(`<head>
    <title>
        Hello from Page
    </title>
</head>

<body>
    <b>Hi there</b>
</body>`)
}


// Register the common methods to the route `handleSum`
app.get('/', givePage);
// app.get('/handleSum', handle_get_request);
app.get('/handleSum', handle_post_request);
app.put('/handleSum', handle_put_request);
app.delete('/handleSum', handle_delete_request);

app.listen(port, started);