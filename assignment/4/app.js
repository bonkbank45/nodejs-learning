const express = require("express");

const path = require("path");

const bodyParser = require("body-parser");

const app = express();

const routeIndex = require("./routes/index.js");
const routeAddUser = require("./routes/add-user.js");

app.set("view engine", "ejs");
app.set("view");

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/admin", routeAddUser.router);

app.use(routeIndex);

app.use((req, res, next) => {
  res.status(404).send("<h1>Page Not Found!</h1>");
});

app.listen(3000);
