const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
    foodName:{
        type: String,
        require : true
    },

    foodCalories: {
        type: Number,
        require: true
    },
    carbPCT: {
        type: Number,
        require: true
    },
    fatPCT: {
        type: Number,
        require: true
    },
    proteinPCT: {
        type: Number,
        require: true
    }
});

const Food = mongoose.model("Item", itemSchema)

module.exports = {Food};