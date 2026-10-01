const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const PORT = 3000;

// подключение к БД (MongoDB)

mongoose.connect