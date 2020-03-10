//  This file handles all of the login/sign-up/logout calls

//  Package Variable Declarations
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const auth = require('../../middleware/auth');


// @route       GET api/auth
// @desc        Get logged in user
// @access      Private (so we need verification middleware)

router.get('/', auth, async (req, res) => {
    // bring in auth (middleware) to fire off on this route (protected)
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

router.post('/signup', async (req, res, next) => {
	const { body } = req;
	const {
		firstName,
		lastName,
		username,
		password,
		email
	} = body;

	//	//	Validation
	//	//	//	firstName
	if (!firstName) {
		return res.send({
			success: false,
			message: 'Error: First name cannot be blank.'
		});
	}
	//	//	//	lastName
	if (!lastName) {
		return res.send({
			success: false,
			message: 'Error: Last name cannot be blank.'
		});
	}
	//	//	//	username
	if (!username) {
		return res.send({
			success: false,
			message: 'Error: Username cannot be blank.'
		});
	}
	//	//	//	email
	if (!email) {
		return res.send({
			success: false,
			message: 'Error: Email cannot be blank.'
		});
	}
	//	//	//	password
	if (!password) {
		return res.send({
			success: false,
			message: 'Error: Password cannot be blank.'
		});
	}

	//	//	Verify that the value given for email exists in Database
	try {
		// find the user with the username
		let user = await User.findOne({ username }); 

		//if username found, user already exists
		if (user) {
			return res.status(400).json({ msg: 'User already exists' }); 
		}
			//	Create newUser to send to the Database
			const newUser = new User();

			//	//	Populate newUser to create a new account
			newUser.email = email;
			newUser.firstName = firstName;
			newUser.lastName = lastName;
			newUser.username = username;
			newUser.password = newUser.generateHash(password);
			newUser.save((err, user) => {
				if (err) {
					return res.send({
						success: false,
						message: 'Error: Server Error.'
					});
				}
				return res.send({
					success: true,
					message: 'Account Created.'
				});
			});
		
		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{
				expiresIn: 360000
			},
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server error');
	}
});

//  Login
//  //  @route   POST api/auth/login
//  //  @desc    Login
//  //  @access  Public



router.post('/login', auth, async ( req, res, next) => {
	const { body } = req;
	const { password } = body
	let { username } = body
    
	//	//	Validation
	//	//	//	username
	if (!username) {
		return res.send({
			success: false,
			message: 'Error: Username cannot be blank.'
		});
	}
	if (!password) {
		return res.send({
		  success: false,
		  message: 'Error: Password cannot be blank.'
		});
	  }
	  username = username.trim();
	  
	
	  try {
		  // find the user that has the email inputted
		let user = await User.findOne({ username }); 

		if (!user) {
			// if there is NOT a user 
			return res.status(400).json({ msg: 'Invalid User' });
		}

		// checking if the password they inputted matches the one in database
		const isMatch = await bcrypt.compare(password, user.password); 

		if (!isMatch) {
			// if it DOES NOT match, respond with msg
			return res.status(400).json({ msg: 'Invalid Password' });
		}

		// payload is the object to send to user when logged in
		const payload = {
			user: {
				id: user.id
			}
		};

		jwt.sign(
			payload,
			config.get('jwtSecret'),
			{
				expiresIn: 360000
			},
			(err, token) => {
				if (err) throw err;
				res.json({ token });
			}
		);
	} catch (err) {
		console.error(err.message);
		res.status(500).send('Server Error');
	}
});

//	Verify User
//  //  @route   GET /api/account/verify
//  //  @desc    Verify token info is for a valid user
//  //  @access  Public
router.get('/api/account/verify', (req, res, next) => {
	//	//	Grab token values
	const { query } = req;
	const { token } = query;

	//	//	Verify that token is unique and is not deleted
	UserSession.find(
		{
			_id: token,
			isDeleted: false
		},
		(err, sessions) => {
			if (err) {
				return res.send({
					sucess: false,
					message: 'Error: Server error'
				});
			}

			if (sessions.length != 1) {
				return res.send({
					success: false,
					message: 'Error: Invalid'
				});
			} else {
				return res.send({
					success: true,
					message: 'Good'
				});
			}
		}
	);
});

//	Verify User
//  //  @route   GET /api/account/logout
//  //  @desc    Logs current user out
//  //  @access  Public
router.get('/api/account/logout', (req, res, next) => {
	//	//	Grab token values
	const { query } = req;
	const { token } = query;

	//	//	Verify that token is unique and is not deleted
	UserSession.findOneAndUpdate(
		{
			_id: token,
			isDeleted: false
		},
		{
			$set: { isDeleted: true }
		},
		null,
		(err, sessions) => {
			if (err) {
				return res.send({
					success: false,
					message: 'Error: Server error'
				});
			}
			return res.send({
				success: false,
				message: 'Good'
			});
		}
	);
});

//  Exports
module.exports = router;
