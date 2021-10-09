// require('dotenv').config();
require('dotenv').config();
const sequelize = require('./db');

const express = require('express');
// import express from 'express';
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
    console.log(e);
  }
};
