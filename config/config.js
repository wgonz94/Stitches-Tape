require("dotenv").config();

// CODE BELOW DOESN'T GIVE ME "USE_ENV_VARIABLE" ERROR on index.js.  However, can't connect to heroku database since I don't have the Heroku app name (funny name like wild lakes 1234).  I tried using the https://x-caliber.herokuapp.com/ that James slacked out but that didn't work.  Could be because it's not my heroku.  Not sure.  Not sure if this is working since I can't test it.

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql"
  },
  test: {
    username: "username",
    password: null,
    database: "databasename",
    host: "host",
    dialect: "mysql",
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    //use_env_variable: "JAWSDB_URL",
    dialect: "mysql"
  }
};

// tried the code below but I get errors about the "use_env_variable" reference on the index.js file.  Unable to clear error.

var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(proces.env.JAWSDB_URL);
} else {
  connecton = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
  });
}

connection.connect();
module.exports = connection;
