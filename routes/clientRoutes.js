var db = require("../models");


module.exports = function(app) {
//Get route to view list
 app.get("/api/clientlist", function(req, res) {
     
    db.Client.findAll({}).then(function(dbClient) {
        res.json(dbClient);
    });
  });

  //Get route to view single client
  app.get("/api/clientlist/:client", function(req, res) {
    db.Client.findOne({
        where: {
            id: req.params.id
        },
    }).then(function(dbClient) {
        res.json(dbClient)
    });
  });


}