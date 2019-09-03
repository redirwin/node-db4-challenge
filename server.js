const express = require("express");
const helmet = require("helmet");

const Recipes = require("./routes/recipe-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api", Recipes);

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working!!" });
});

module.exports = server;
