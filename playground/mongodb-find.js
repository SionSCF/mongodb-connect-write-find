//Loading library and connecting to database
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', {useNewUrlParser: true}, (err, client) => {
    if (err) {
        //Always use 'return' to stop the success log function from running
        return console.log('Unable to connect to the database');
    }
    console.log('Successfully connected to database');
    const db = client.db('ToDoApp')

    /*
    db.collection('Todos').find({
        completed: false,
        _id: new ObjectID("5b4b8161e411d931640939e6")
    }).toArray().then((docs) => {
        console.log("Tasks : ")
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    });
*/

    db.collection('Users').find({
        name: "Valerie Febrina"
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    });

    //client.close();
});