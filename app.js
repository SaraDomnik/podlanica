//Import
const express = require("express");
const connectLivereload = require("connect-livereload");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
const i18next = require("i18next");
const i18nextMiddleware = require("i18next-http-middleware");
const Backend = require("i18next-fs-backend");
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
i18next
  .use(Backend)
  .use(i18nextMiddleware.LanguageDetector)
  .init({
    // debug: true,
    backend: {
      // eslint-disable-next-line no-path-concat
      loadPath: __dirname + "/locales/{{lng}}/{{ns}}.json",
      addPath: __dirname + "/locales/{{lng}}/{{ns}}.missing.json",
    },
    fallbackLng: "si",
    // nonExplicitSupportedLngs: true,
    // supportedLngs: ['en', 'de'],
    load: "languageOnly",
    saveMissing: true,
  });

app.use(i18nextMiddleware.handle(i18next));

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
  console.log(req.query);
  res.render("index");
});

//Listen on port 8080
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
