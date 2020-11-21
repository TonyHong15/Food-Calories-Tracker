"use strict";

const{ Item } = require("./item");

class ItemRepo {
    find(cond) {
        return Item.find(cond).exec();
    }

    create(obj) {
        return new Item(obj).save();
    }

    deleteOne(cond) {
        return Item.deleteOne(cond).exec();
    }

    updateOne(cond, update) {
        return Item.updateOne(cond, update).exec();
    }
}

module.exports = ItemRepo;