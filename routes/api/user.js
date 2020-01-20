const express = require('express');
const router = express.Router();

// pull in user model
const User = require('../../models/User');

// use postman to test api routes

// @route GET /api/users
// get all users
router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
});

// @route PUT api/users
// get single user info
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(404).json('User Not Found'));
});

// @route POST /api/users
// create new user
router.post('/', (req, res) => {
    const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        isDeleted: req.body.isDeleted,
        wantsUpdates: req.body.wantsUpdates
    });

    newUser.save()
        .then(user => res.json(user));
});

// @route PUT api/users
// update existing user info
router.put('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.update(req.body)
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

// @route DELETE /api/users/:id
// delete a user
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove()
        .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;