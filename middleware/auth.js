// Middleware is just a function that has access to the req & res cycle and req & res object whenever we hit any endpoint
// paired with login function

const jwt = require('jsonwebtoken');
const config = require('config');

// This is the middleware function
module.exports = function(req, res, next) {
    // Get token from header
    const token = req.header('x-S&T-token'); 
    // Check if there is NOT a token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' }); 
    }

    // If there IS a token
    try {
        // verify takes in the token and the secret from config
        const decoded = jwt.verify(token, config.get('jwtSecret')); 

        // set req.user to the user in the jwt payload **helps gives access to user in the route**
        req.user = decoded.user; 
        // move on
        next(); 
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' }); 
    }
};


