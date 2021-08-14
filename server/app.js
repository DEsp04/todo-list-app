//App
//framework for server
const express = require("express");

//specific local host have access to the server
const cors = require("cors");

//logs request and morgan happens to be a middleware for logger. it helps generate request logs
const logger = require("morgan");

const itemRoutes = require("./routes/items");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(logger("dev"));

app.use(cors());

app.get("/", (req, res) => res.send("API is running!"));

app.use("/api", itemRoutes);


module.exports = app;