const express = require("express");

const router = express.Router();
const adminData = require("./add-user");

router.get("/", (req, res, next) => {
  const users = adminData.users;
  console.log(users);
  res.render("index", { members: users, pageTitle: "Home's Page" });
});

module.exports = router;
