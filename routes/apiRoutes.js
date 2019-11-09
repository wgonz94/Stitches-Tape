var db = require("../models");

module.exports = function(app) {
  //user create/register
  app.post("/api/user/:id", (req, res) => {
    db.User.create(req.body).then(function(dbProj) {
      res.json(dbProj);
    });
  });

  //delete user acc
  app.delete("/api/user/:id", (req, res) => {
    db.User.destroy({ where: { id: req.params.id } }).then(function(dbProj) {
      res.json(dbProj);
    });
  })

  //update user info
  app.put("/api/user/:id", (req, res) => {
    db.User.update(req.body,
      {where: {id: req.params.id}
    }).then(function(dbProj) {
      res.json(dbProj)
    });
  });

  // Create a new client, measurement sheet
  app.post("/api/NewMeasurement", (req, res) => {
    db.Measurement.create(req.body).then(function(dbProj) {
      res.json(dbProj);
    });
  });

    //Get route to view list for projects under user
 app.get("/api/user/:id", (req, res) => {
  db.Measurement.findAll({
    where: {
      foreignKey: req.params.id
    }
  }).then(function(dbProj) {
      res.json(dbProj);
  });
});

//Get route to view single project
app.get("/api/projects/:id", (req, res) => {
  db.Measurement.findOne({
      where: {id: req.params.id },
  }).then(function(dbProj) {
      res.json(dbProj)
  });
});

  // Delete a project by id
  app.delete("/api/projects/:id", (req, res) => {
    db.Measurement.destroy({ where: { id: req.params.id } }).then(function(dbProj) {
      res.json(dbProj);
    });
  });

  // update a project by id
  app.put("/api/projects/:id", (req, res) => {
    db.Measurement.update(req.body,
      {where: {id: req.params.id}
    }).then(function(dbProj) {
      res.json(dbProj)
    });
  });
};
