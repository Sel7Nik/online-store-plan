require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');

const PORT = process.env.PORT || 5000;

const app = express();

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await sequelize.app.listen(PORT, () =>
      console.log(`START SERVER ON PORT ${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

start();
