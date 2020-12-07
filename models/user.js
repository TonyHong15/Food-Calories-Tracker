'use strict';

const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
        minlength: 1,
        trim: true,
        unique: true
	}, 
	password: {
		type: String,
		required: true,
		minlength: 1
    },
    firstName: {
		type: String,
		required: true,
		minlength: 1
    },
    lastName: {
		type: String,
		required: true,
		minlength: 1
	},
	goal: {
		type: Number,
		required: true
    },
    foods: []
})

const User = mongoose.model('User', UserSchema)
module.exports = { User }