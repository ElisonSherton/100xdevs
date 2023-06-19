/**
  You need to create a HTTP server in Node.js which will handle the logic of an authentication server.
  - Don't need to use any database to store the data.

  - Save the users and their signup/login data in an array in a variable
  - You can store the passwords in plain text (as is) in the variable for now

  The expected API endpoints are defined below,
  1. POST /signup - User Signup
    Description: Allows users to create an account. This should be stored in an array on the server, and a unique id should be generated for every new user that is added.
    Request Body: JSON object with username, password, firstName and lastName fields.
    Response: 201 Created if successful, or 400 Bad Request if the username already exists.
    Example: POST http://localhost:3000/signup

  2. POST /login - User Login
    Description: Gets user back their details like firstname, lastname and id
    Request Body: JSON object with username and password fields.
    Response: 200 OK with an authentication token in JSON format if successful, or 401 Unauthorized if the credentials are invalid.
    Example: POST http://localhost:3000/login

  3. GET /data - Fetch all user's names and ids from the server (Protected route)
    Description: Gets details of all users like firstname, lastname and id in an array format. Returned object should have a key called users which contains the list of all users with their email/firstname/lastname.
    The users username and password should be fetched from the headers and checked before the array is returned
    Response: 200 OK with the protected data in JSON format if the username and password in headers are valid, or 401 Unauthorized if the username and password are missing or invalid.
    Example: GET http://localhost:3000/data

  - For any other route not defined in the server return 404

  Testing the server - run `npm run test-authenticationServer` command in terminal
 */

const bodyParser = require("body-parser");
const express = require("express");
const { v4: uuidv4 } = require('uuid');
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
// write your logic here, DONT WRITE app.listen(3000) when you're running tests, the tests will automatically start the server

var users = []
var users_set = new Set();

// Create the first route for making a new user
function check_exists(user_name) {
  return users_set.has(user_name);
}

function create_user(user_object) {
  // username, password, firstName and lastName fields.
  if (check_exists(user_object.username)){
    return false;
  }
  else {
    const id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    user_object.id = id;
    users.push(user_object);
    users_set.add(user_object.username);
    return true;
  }
}

function handle_signup(req, res) {
  var body = req.body;
  const user_creation_res = create_user(body);

  if (user_creation_res) {
    res.status(201).send("Signup successful");
  }
  else {
    res.status(400).send("Bad Request: User already exists.");
  }
}

app.post('/signup', handle_signup)

// Create the second route to handle login requests
function handle_login(req, res){
  const user_details = req.body;
  const name = user_details.username;
  const pass = user_details.password;
  console.log(user_details, name, pass);

  if (!users_set.has(name)){
    res.status(401).send("Unauthorized")
  }

  for (let x = 0; x < users.length; x++) {
    const current_name = users[x].username;
    const current_pw = users[x].password;

    if (current_name === name && current_pw === pass) {
      res.status(200).send(users[x]);
    }
  }

  res.status(401).send("Unauthorized")

}

app.post('/login', handle_login)

// Create the third route to get the data
function get_data(req, res){

  const headers = req.headers;

  // Authenticate the user, i.e. check if the name and password in the headers actually exists in the DB
  const name = headers.username;
  const pw = headers.password;

  if (!users_set.has(name)){
    res.status(401).send("Unauthorized");
  }

  let exists = false;
  for (let x = 0; x < users.length; x++) {
    if (users[x].username === name && users[x].password === pw) {
      exists = true;
      break;
    }
  }

  // If the user exists, then return a list of users with their firstname, lastname and email IDs
  if(exists) {
    let udata = [];
    for(let x = 0; x < users.length; x++) {
      udata.push({email: users[x].email, firstName: users[x].firstName, lastName: users[x].lastName})
    }
    res.status(200).send({users: udata});
  }

  // If we have reached here, that means we haven't encountered the user in our database
  // Hence return an unauthorized response with 401 status code
  res.status(401).send("Unauthorized")
}

app.get('/data', get_data)

// Finally for any other route, return a 404 status code.
app.get('/:', function (req, res){
  res.status(404).send("Route doesn't exist");
})

module.exports = app;
