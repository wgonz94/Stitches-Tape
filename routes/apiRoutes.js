const db = require("../models");
const User = require('../models/User');

module.exports = app => {

  // Create a new client, measurement sheet
  app.post("/api/NewMeasurement", (req, res) => {
    db.Measurement.post(req.body).then(dbProj => {
      res.json(dbProj);
    });
  });
  app.post("/api/signup", (req, res) => {
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      email: req.body.email,
  }); 

  newUser.save()
      .then(user => res.json(user));
  });

  app.post('/api/account/login', (req, res, next) => {
            const { body } = req;
            const {
                password
            } = body;
            let {
                email
            } = body;
    
            if (!email) {
                return res.send({
                  success: false,
                  message: 'Error: Email cannot be blank.'    
                });
            }
            if (!password) {
                return res.send({
                  success: false,
                  message: 'Error: Password cannot be blank.'    
                });
            }
    
            email = email.toLowerCase();
    
            User.find({
                email: email
            }, (err, users) => {
                if(err) {
                    return res.send({
                      success: false,
                      message: 'Error: Server error'
                    });
                }
                if(users.length != 1) {
                    return res.send({
                        success: false,
                        message: 'Error: Invalid'
                    });
                }
    
                const user = users[0];
                if(!user.validPassword(password)) {
                    return res.send({
                        success: false,
                        message: 'Error: Invalid Password'
                    });
                }
    
                //Otherwise correct user
                const userSession = new UserSession();
                userSession.userId = user._id;
                userSession.save((err, doc) => {
                    if(err) {
                        return res.send({
                          success: false,
                          message: 'Error: Server error'
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'Valid sign in',
                        token: doc._id
                    })
                });
            });
        });
        app.post('/api/account/verify', (req, res, next) =>{
        //Grab token
        const { query } = req;
        const { token } = query;

        //verify token is unique and is not deleted
        UserSession.find({
            _id: token,
            isDeleted: false,
        }, (err, sessions) => {
            if(err) {
                return res.send ({
                    sucess: false,
                    message: 'Error: Server error'
                });
            }

            if(sessions.length != 1){
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                })
            } else {
                return res.send({
                    success: false,
                    message: 'Good'
                });
            }
        })
    })
    app.post('/api/account/logout', (req, res, next) => {
        const { query } = req;
        const { token } = query;

        //verify token is unique and is not deleted
        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false,
        },{
            $set:{isDeleted:true}
        }, null, (err, sessions) => {
            if(err) {
                return res.send ({
                    sucess: false,
                    message: 'Error: Server error'
                });
            }
                return res.send({
                    success: false,
                    message: 'Good'
                });
            
        })
    })

  //  Should this be a res.render?  -James
  //get the measurements for 1 client
  app.get("/api/measurement/:id", (req, res) => {
    db.Measurement.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  //Get user profile info by id
  app.get("/api/user/:id", (req, res) => {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  //Get all client measurements for the user
  app.get("/api/measurements/:id", (req, res) => {
    db.User.findAll({
      include: [{
        model: db.Measurement,
        where: {
          UserId: req.params.id
        }
      }]
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  //  Should this be a res.render?  -James
  //Get route to view single project
  app.get("/api/projects/:id", (req, res) => {
    db.Measurement.findOne({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  // Delete a project by id
  app.delete("/api/projects/:id", (req, res) => {
    db.Measurement.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbProj => {
      res.json(dbProj);
    });
  });

  // update a project by id
  app.put("/api/projects/:id", (req, res) => {
    db.Measurement.update(req.body, { where: { id: req.params.id } }).then(
      dbProj => {
        res.json(dbProj);
      }
    );
  });
};
