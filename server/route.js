const express = require("express");
const router = express.Router();

const {
  mainRoute
} = require("./controllers.js");

router.get("/", mainRoute)

module.exports.mainRoutes = router;