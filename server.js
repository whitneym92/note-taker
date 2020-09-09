// requiring the dependencies express, path, and fs for the application
const express = require("express");
const path = require("path");
const fs = require("fs");

//creating an express server
const app = express();

//establishing a port connection 
const PORT = process.env.PORT || 3001;

//setting up the app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

//points our server to our route files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener, telling our server to start
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });