//COnfig the env file, by import dotenv module, and running config method.
require('dotenv').config();
//Define yoru express which will responsible for talking with the backend
const express = require('express');
//Define your bodyParser which will responsible for defining your req.body
const bodyParser = require('body-parser');
//Require path module which help join paths.
const path = require('path');
//import mongoose to insert into database. 
const mongoose = require('mongoose');
//import your controller files 
const carsCtrl = require('./controllers/cars_controller');
const contactCtrl = require('./controllers/contact_controller');
const PORT = 5000;
//Have a seperate express server instance 
const app = express();

app.use( express.static( `${__dirname}/../build` ) );

mongoose.connect(process.env.CONNECTION_STRING, {useNewUrlParser: true}, (err) => {
    if(err) console.log("Database Connection Error--------", err);
    console.log("Database Connected!");
})
//Define your req.body using middleware 
app.use(bodyParser.json());

//Define your get endppoints 
app.get('/api/cars_sold', carsCtrl.readCars);
app.get('/api/cars_sold/:id', carsCtrl.readCar);
//Define your post endpoint to creates new data 
app.post('/api/contact', contactCtrl.contact);


//Use to get all routes 
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})

app.listen(PORT, () => console.log(`Listening on Port:${PORT}`));