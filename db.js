const mongoose = require('mongoose');

//Define the MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/Hotels'

//Set up mongoose connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,  
    useUnifiedTopology: true  //For backward compatibility with Node v8
})


//Getting the default connection
//mongoose maintaines a default connection object representing the MongoDB Connection

const db = mongoose.connection; //This object will only help in interaction with the database

//Defining event listeners for database connection

db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.once('error',(err)=>{
    console.error('MongoDB connection error: ', err);
});

db.on('disconnected',()=>{
    console.log('MongoDB disconnected');
})

//Export the database connection
module.exports= db;
