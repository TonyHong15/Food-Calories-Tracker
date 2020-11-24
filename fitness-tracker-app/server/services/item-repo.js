"use strict";

const{ ItemModel } = require("./item");

class ItemRepo {
    find(cond) {
        return ItemModel.find(cond).exec();
    }

    create(obj) {
        return new ItemModel(obj).save();
    }

    deleteOne(cond) {
        return ItemModel.deleteOne(cond).exec();
    }

    updateOne(cond, update) {
        return ItemModel.updateOne(cond, update).exec();
    }
}

module.exports = ItemRepo;