//importar los módulos
const express = require("express");
const path = require("path");
const morgan = require("morgan");

//Inicializaciones
const app = express();

//configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//middlewares
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use(require("./routes/entries.routes"));

//404 handler
app.use((req, res) => {
  res.status(404).render("404");
});

//Inicializar la aplicación
app.listen(app.get("port"), () => {
  console.log("servidor en puerto:", app.get("port"));
});
