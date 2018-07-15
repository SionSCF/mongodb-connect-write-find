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

    //findOneAndUpdate
    /*
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5b4b890148aa45f987a737f3")
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    */

   db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b4b835d37a7332a94f847bd")
}, {
    $set: {
        name: "Sion Christian",
        location: "DKI Jakarta"
    },
    $inc: { age: 1 }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result);
});

    //client.close();
});