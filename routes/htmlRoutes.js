var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load Landing Page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/landingPage.html"))
  });

  // Load Register/Login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/loginRegisterPage.html"))
  });

  // View create new page
  app.get("/create", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/makeNew.html"))
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
