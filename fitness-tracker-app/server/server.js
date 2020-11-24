// server code 
"use strict";

const express = require("express");
const path = require("path");

const Tracker = require("./services/tracker");
const ItemRepo = require("./services/item-repo")
const ir = new ItemRepo();

const tracker = new Tracker(ir);
const app = express();

const bodyParser = require("body-parser");


app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

// api method routing 
app.get("/api/foods", (req, res) => {
    tracker.getAllFood()
        .then(foods => res.send(foods))
        .catch(error => {
            console.log(error);
            res.status(400).send();
        })
});

app.put("/api/food", (req, res) => {
    tracker.addFood(req.body)
        .then(_ => res.send())
        .catch(error => {
            console.log(error);
            res.status(400).send();
        });
});

app.delete("/api/food", (req, res) => {
    tracker.deleteFood(req.body.itemId)
        .then(_ => res.send())
        .catch(error => {
            console.log(error);
            res.status(400).send();
        });
});

app.post("/api/total_calories", (req, res) => {
    tracker.getTotalCalories(req.body)
        .then(calories => res.send(calories))
        .catch(error => {
            console.log(error);
            res.status(400).send();
        });
});




module.exports = app;