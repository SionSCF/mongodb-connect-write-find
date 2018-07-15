//Loading library and connecting to database
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

/*
var user = { name : "Sion Christian Felia", age: 19 };
var {name} = user;
console.log(name);
*/

/*
a Method to cennect to a database
1st argument is the url to database
2nd argument is a callback function
--------------------------------------------------
In the callback function, it takes 2 arguments.
The 1st argument is an error argument
The 2nd argument is the database object
*/

//MongoDB v2.2.5
//---------------------------------------------------
/*
MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        Always use 'return' to stop the success log function from running
        return console.log('Unable to connect to the database');
    }
    console.log('Successfully connected to database');

    db.collection('Todos').insertOne({

    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    Always close your connection to the database server!
   db.close();
});
*/

//MongoDB v3
//-----------------------------------------------------

MongoClient.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        //Always use 'return' to stop the success log function from running
        return console.log('Unable to connect to the database');
    }
    console.log('Successfully connected to database');
    const db = client.db('ToDoApp')

 /*   db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert collection', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/

/*
    db.collection('Users').insertOne({
        name : 'Jaclyn Regina',
        age : 13,
        location : 'Jl. Darmo Permai Utara XI no. 33'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user!', err);
        }
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    })

    //Always close your connection to the database server!
    client.close();
*/
});