var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');

var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 5000;

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new ToDo ({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
    console.log(req.body);
});

//app.get('/todos/', (req, res) => {

//});


app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});

/*
var newUser = new User ({
    email: "felia.sionchristian@gmail.com"
});

var newToDo = new ToDo({
    text: "Eat Dinner"
});


var newToDo = new ToDo({
    text: "Free Indonesia",
    completed: true,
    completedAt: 1945
});

newToDo.save().then((doc) => {
    console.log("Saved successfully!", doc);
}, (e) => {
    console.log('Unable to save data!');
});

newUser.save().then((doc) => {
    console.log('New User added!', doc);
}, (e) => {
    console.log('Unable to insert user!', e);
});
*/