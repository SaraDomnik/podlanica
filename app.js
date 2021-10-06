//Import
const express = require("express");
const connectLivereload = require("connect-livereload");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const i18next = require("i18next");
const middleware = require("i18next-express-middleware");
const app = express();
const port = 8080;

//Live Reload

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.use(connectLivereload());

// Internationalization i18next

//Static

app.use(express.static("public"));
app.use("/Fonts", express.static(__dirname + "public/Fonts"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
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
