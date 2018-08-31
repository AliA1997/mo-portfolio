//define your model
const mongoose = require('mongoose');
//Define your schema 
const Schema = mongoose.Schema;

//Define your Schema 
const message = new Schema({
    email: String,
    subject: String, 
    name: String,
    compay_name: String,
    date: String,
    message: String
});

// export the model
module.exports = mongoose.model('Message', message);