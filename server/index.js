// require('dotenv').config();
require('dotenv').config();
const sequelize = require('./db');

const express = require('express');
// import express from 'express';
const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`START SERVER ON PORT ${PORT}`));
