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

    //deleteMany
    /*
    db.collection('Todos').deleteMany({
        text : "Lunch"
    }).then((result) => {
        console.log(result);
    });
    */

    //deleteOne
    /*
    db.collection('Todos').deleteOne({
        text: "Lunch"
    }).then((result) => {
        console.log(result);
    });
    */

    //findOneAndDelete
    /*
    db.collection('Todos').findOneAndDelete({
        completed: false
    }).then((result) => {
        console.log(result);
    });
    */

    
    db.collection('Users').deleteMany({
        name : "Jaclyn Regina"
    }).then((result) => {
        console.log(result)
    });

    /*
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("5b4b82b159d67f3fc0dd797d")
    }).then((result) => {
        console.log(result);
    });
    */

    //client.close();
});