//import your car model
const Car = require('../models/car');
module.exports = {
    readCars: (req, res) => {
        Car.find({}, (err, cars) => {
            if(err) console.log('Read Cars Error---------', err);
            res.json({cars}).end();
        })
    },
    readCar: (req, res) => {
        //Destruct id from the request params
        const { id } = req.params;
        Car.findById(id, (err, car) => {
            if(err) console.log('Read Car Error--------', err);
            res.json({car}).end();
        })
    }
}