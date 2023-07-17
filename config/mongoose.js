// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://127.0.0.1:27017/todo_app_db');

// aquire the connection (to check if it is successful)
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, "Error in connecting to MongoDB"));

// up and running then print the message
db.once('open', function(){
    console.log('Successfully connected to database');
});

// exporting the database
module.exports = db;