//  This file handles all of the login/sign-up/logout calls

//  Package Variable Declarations
const bcrypt = require('bcryptjs')
const User = require('../../models/User');
const UserSession = require('../../models/UserSession');
const router = require('express').Router();

//  Sign up
//  //  @route   POST api/signup
//  //  @desc    Post New User Registration
//  //  @access  Public

//////update 1-30-2020
///----Using this route to get the User info
///---- must add the parameters to compare password and username
router.get('/api/users/verify/:username', (req, res) => {
	// console.log(`username: ${req.params.username}`);
	User.findOne({ username: req.params.username })
		.then(user => res.json(user))
		.catch(err => res.status(404).json(`User Not Found\nError: ${err}`));
});

router.post('/api/signup', (req, res, next) => {
	const { body } = req;
	const {
		firstName,
		lastName,
		username,
		password,
		email,
		wantsUpdates
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
	User.find(
		{
			username: username
		},
		(err, pastUser) => {
			if (err) {
				//	//	//	Return General Error Message
				return res.send({
					success: false,
					message: 'Error: Server Error.'
				});
			} else if (pastUser.length > 0) {
				//	//	//	Return Account Exists Error
				return res.send({
					success: false,
					message: 'Error: Account already exists.'
				});
			}

			//	//	Create newUser to send to the Database
			const newUser = new User();

			//	//	Populate newUser to create a new account
			newUser.email = email;
			newUser.firstName = firstName;
			newUser.lastName = lastName;
			newUser.username = username;
			newUser.wantsUpdates = wantsUpdates;
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
		}
	);
});

//  Login
//  //  @route   POST api/account/login
//  //  @desc    Login
//  //  @access  Public

//////UPDATE: 1-30-2020
////////Take this route out, but take and insert "bcrypt.compare" to compare encrypted password to password inputed on frontend
////////towards the route of 'api/users/verify/:username'
router.post('/api/account/login', async(req, res, next) => {
  User.find(username = req.body.username)
	if (!username) {
		return res.status(400).send('Cannot find User')
	}
	try {
		if(await bcrypt.compare(req.body.password, User.password)){
			res.send('Success')
		} else {
			res.send('Failed: Not Allowed')
		}
	} catch {
		return res.status(500).send('Something has gone wrong')
	}
	// const { body } = req;
    // const {password, username} = body;
    

	//	//	Validation
	//	//	//	username
	if (!username) {
		return res.send({
			success: false,
			message: 'Error: Username cannot be blank.'
		});
	}
	//	//	//	password
	if (!password) {
		return res.send({
			success: false,
			message: 'Error: Password cannot be blank.'
		});
	}

	// User.findOne(
	// 	{
	// 		username: username
	// 	},
	// 	(err, user) => {
	// 		if (err) {
	// 			return res.send({
	// 				success: false,
	// 				message: 'Error: Server error'
	// 			});
	// 		}

	// 		if (!user.validPassword(password)) {
	// 			return res.send({
	// 				success: false,
	// 				message: 'Error: Invalid Password'
	// 			});
	// 		}
			// `UPDATE: 1-30-2020`
			// `need to use this code here to create user session`
	// 		//Otherwise correct user
			const userSession = new UserSession();
			userSession.userId = user._id;
			userSession.save((err, doc) => {
				if (err) {
					console.log(err)
					return res.send({
						success: false,
						message: 'Error: Server error'
					});
				}
				return res.send({
					success: true,
					message: 'Valid sign in!',
					token: doc._id
				});
			});
	// 	}
	// );
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
