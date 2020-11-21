const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        require : true
    },

    calories: {
        type: Number,
        require: true
    }
});

const ItemModel = mongoose.model("Item", itemSchema)

module.exports = {ItemModel};