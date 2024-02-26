const express = require("express");

const router = express.Router();

const users = [];

router.get("/add-users", (req, res, next) => {
  res.render("add-user", { pageTitle: "Add-user's Page" });
});

router.post("/add-users", (req, res, next) => {
  console.log(req.body.title);
  users.push(req.body);
  res.redirect("/");
});

module.exports.router = router;
module.exports.users = users;
