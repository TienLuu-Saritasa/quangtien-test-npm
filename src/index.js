const cors = require("cors");
const env = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const chalk = require('chalk');

const app = express();
env.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.start = (port) => {
  app.listen(port, () => {
    console.log(chalk.green.underline.bold("Server run on " + port));
  });
}

module.exports = app;