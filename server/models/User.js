/** @format */

//write schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
     firstName: String,
     lastName: String,
     email: String,
     password: String,
     phone: String,
     address: String,
});

//create model

const User = mongoose.model("user", UserSchema);

module.exports = User;
