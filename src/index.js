const path = require("path");
const handlebars = require("express-handlebars");
const express = require("express");
const morgan = require("morgan");

const route = require("./routes");
const db = require("./config/db");

const app = express();
const port = 3000;

// Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded());

// http logger
app.use(morgan("combined"));

// template engine
app.engine(
  ".hbs",
  handlebars.engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));

route(app);

app.listen(port, () => {
  console.log(`Blog app listening on port ${port}`);
});
