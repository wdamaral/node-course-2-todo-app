// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// //const assert = require('assert');
const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db(dbName);
    
    //findoneUpdate

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5b0e02068557b623d85ea896')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});