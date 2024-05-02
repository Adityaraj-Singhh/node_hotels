const mongoose = require('mongoose');

//Define the person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
        
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'], //either of three values possible
        required: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String
    },
    salary:{
        type: Number,
        required: true
    }
})

//From schema we make models

//create person model

const Person = mongoose.model("Person",personSchema); 
//comment added for testing purpose
module.exports=Person; 