//Dependencies- NPM packages

var express = require("express");
var path = require("path");

// Sets up express App
// =============================================================
var app = express();

// Will work local or with Heroku
var PORT = process.env.PORT || 3000;

// Needed for heroku deployment- I forget why but it wouldn't work without this.
app.use(express.static(path.join(__dirname + "/app/public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//points server to routes

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var htmlRoutes = require("./app/routing/htmlRoutes");
app.use("/",htmlRoutes);

var apiRoutes = require("./app/routing/apiRoutes");
app.use("/api",apiRoutes);

//Starts server and tell us it's running
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  