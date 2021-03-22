const express = require('express'),
  mysql = require('mysql'),
  fs = require('fs'),
  app = express(),
  config = require('./config.json');

// Init Connection To Database
const db = mysql.createConnection(config).connect((err) => {
  if (err) throw err
  console.log("Database Connected");
})

// Dynamic Route Import
getAllRoutes = () => {
  const routes = fs.readdirSync("./routes");
  routes.forEach((file) => {
    require(`./routes/${file}`)(app);
  });
};

app.listen(2121, () => console.log('Server Running at port 2121'));

(executor => {getAllRoutes()})()
