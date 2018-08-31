//Define your model
const mongoose = require('mongoose');
//Define your Schema 
const Schema = mongoose.Schema;

//Define your schema 
const car = new Schema({
    make: String,
    model: String,
    year: String,
    time_sold: String,
    sold_at: Number,
    images: [{caption: String, image: String}],
    description: [String]
});

//Export the model 
module.exports = mongoose.model('Car', car);