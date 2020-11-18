// server code 
"use strict";

const express = require("express");
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
const{ getAllFood, addFood, deleteFood, getTotalCalories} = require("./tracker");
const { scryptSync } = require("crypto");

const app = express();

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

// api method routing 
app.get("/api/foods", (req, res) => {
    scs.getAllFood()
    .then(foods => res.send(foods))
    .catch(error => {
        console.log(error);
        res.status(400).send();
    })
});

app.put("/api/food", (req, res) => {
    scs.addFood(req.body)
    .then(_ => res.send())
    .catch(error => {
        console.log(error);
        res.status(400).send();
    });
});

app.delete("/api/food", (req, res) => {
    scs.deleteFood(req.body.itemId)
        .then(_ => res.send())
        .catch(error => {
            console.log(error);
            res.status(400).send();
        });
});

app.post("/api/total_calories", (req, res) => {
    scs.getTotalCalories(req.body)
        .then(calories => res.send(calories))
        .catch(error => {
            console.log(error);
            res.status(400).send();
        });
});


// listening port 
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => console.log(`Listening on port ${port}...`));