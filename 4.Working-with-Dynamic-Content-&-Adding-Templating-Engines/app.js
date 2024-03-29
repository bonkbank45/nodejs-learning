const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRouter = require("./routes/shop");

const app = express();

app.set("view engine", "ejs");
app.set("views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.router);

app.use(shopRouter);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  res.status(404).render("404", { docTitle: "Page Not Found" });
});

app.listen(3000);
