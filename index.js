const express = require("express");
const path = require("path");
const routes = require("./routes/");

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(function (_, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    "frame-ancestors 'self' https://google.com"
  );
  return next();
});

app.use(express.static("assets"));

app.use(routes);

app.listen(app.get("port"), () => {
  console.log(`Listening to ${app.get("port")}`);
});
