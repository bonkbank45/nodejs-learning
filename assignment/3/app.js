const express = require("express");
const app = express();

const path = require("path");

const routeHome = require("./routes/home");
const routeUsers = require("./routes/users");

app.use(express.static(path.join(__dirname, "public")));

app.use(routeUsers);
app.use(routeHome);

app.listen(3000);
