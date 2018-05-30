// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// //const assert = require('assert');
const url = 'mongodb://localhost:27017/TodoApp';
const dbName = 'TodoApp';
// (async function() {
//   // Connection URL
//   
//   // Database Name

//   let client;

//   try {
//     // Use connect method to connect to the Server
//     client = await MongoClient.connect(url);

//     const db = client.db(dbName);
    
//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if(err) {
//             return console.log('Unable to insert todo.');
//         }

//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });

//     console.log('Connected to database.');
//   } catch (err) {
//     console.log(err.stack);
//   }

//   if (client) {
//     client.close();
//   }
// })();

MongoClient.connect(url, (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server.');
    const db = client.db(dbName);

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b076f294a030735088fbdc2')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').count().then((count) => {
        console.log('Todos ', count);
        // console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });
    // client.close();

});