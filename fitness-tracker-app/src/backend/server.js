// server code 
"use strict";

const express = require("express");
const { truncate } = require("fs");
const http = require("http");
const mongoose = require('mongoose')

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/Fitness';
console.log(mongoURI);

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(`Error: ${err}`));

const bodyParser = require("body-parser");

mongoose.set("useFindAndModify", false);

// planning all functions 
// const{  } = require("./services/...");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

// api method routing 


// listening port 
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}...`));