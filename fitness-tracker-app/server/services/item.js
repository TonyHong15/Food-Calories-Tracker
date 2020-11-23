const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    foodName:{
        type: String,
        require : true
    },

    foodCalories: {
        type: Number,
        require: true
    }
});

const ItemModel = mongoose.model("Item", itemSchema)

module.exports = {ItemModel};