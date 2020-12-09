const express = require("express");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const path = require("path");
let cors = require("cors");

const app = express();

//settings
app.set("port", 3001);
app.use(cors({ origin: true, credentials: true }));
app.set("views", path.join(__dirname, "views"));
app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
//midlewares
app.use(morgan("dev"));
//para aceptar datos que vienen desde formulario en json
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/index.js"));

//static files
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
