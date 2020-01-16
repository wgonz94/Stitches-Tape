// require("dotenv").config();
const express = require("express");
const path = require('path');
var morgan = require('morgan');
const app = express();
const mongoose = require('mongoose');


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// set morgan to log info about requests for development use
app.use(morgan('dev'));

// config MongoDB
const db = require('./config/keys_prod').mongoURI;

// set Mongo config options to avoid deprication errors
const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// connect to MongoDB
mongoose.connect(db, configOptions)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

// Routes
// added separate routes for users, measurements, and login for clarity
app.use('/api/users', require('./routes/api/user'));
app.use('/api/measurements', require('./routes/api/measurement'));
app.use('/api/login', require('./routes/login'));

// Serve static assets if we're in production
if(process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

// Starting the server, syncing our models ------------------------------------/
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT,
    PORT
  );
});

module.exports = app;
