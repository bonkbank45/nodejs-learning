const express = require("express");

const app = express();

app.use("/user", (req, res, next) => {
  console.log("I'm the second middleware!");
  res.send("<h1>Hello from /user!</h1>");
});

app.use("/", (req, res, next) => {
  console.log("I'm the first middleware!");
  res.send("<h1>Hello from /</h1>");
});

app.listen(3000);
