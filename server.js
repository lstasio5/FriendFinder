var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + "/app/public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var htmlRoutes = require("./app/routing/htmlRoutes");
app.use("/",htmlRoutes);

var apiRoutes = require("./app/routing/apiRoutes");
app.use("/api",apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  