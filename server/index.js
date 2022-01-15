// Importing Libraries
const express = require("express");
const mongoose = require("mongoose");

// Importing Routes
const { mainRoutes } = require("./route.js");

// Starting Server
const app = express();
const PORT = process.env.PORT || 5000;

// Server setting
app.use(express.json());
app.use(express.urlencoded());

// Server Routes
app.use("/", mainRoutes);


app.listen(PORT, () => console.log("Server Started at port", PORT));