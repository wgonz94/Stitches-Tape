const express = require('express');
const router = express.Router();

// pull in measurement model
const Measurement = require('../../models/Measurement');

// use postman to test api routes

// @route GET /api/Measurements
// get all Measurements
router.get('/', (req, res) => {
    Measurement.find()
        .then(measurements => res.json(measurements))
});

// @route POST /api/measurements
// create new measurement
router.post('/', (req, res) => {
    const newMeasurement = new Measurement({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        wantsUpdates: req.body.wantsUpdates
    });

    newMeasurement.save()
        .then(measurement => res.json(measurement));
});

// @route PUT api/measurements
// update existing measurement info
router.put('/:id', (req, res) => {
    Measurement.findById(req.params.id)
        .then(measurement => measurement.update(req.body)
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// @route DELETE /api/measurements/:id
// delete a measurement
router.delete('/:id', (req, res) => {
    Measurement.findById(req.params.id)
        .then(measurement => measurement.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;