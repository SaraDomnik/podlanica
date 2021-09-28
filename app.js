//Import
const express = require("express");
const app = express();
const port = 5000;

//Static
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/owl-css", express.static(__dirname + "public/owl-css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/jquery", express.static(__dirname + "public/jquery"));
app.use("/img", express.static(__dirname + "public/img"));
app.use("/video", express.static(__dirname + "public/video"));

//Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index");
});

//Listen on port 3000
app.listen(port, () => {
  console.log(`Listening on port${port}`);
});
