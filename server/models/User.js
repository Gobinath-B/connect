/** @format */

//write schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
     companyName: String,
     currentJob: String,
     currentRole: String,
     education: String,
     email: String,
     firstName: String,
     graduationYear: String,
     lastName: String,
     lookingFor: String,
     organizationName: String,
     password: String,
     phone: String,
     studentId: String,
});

//create model

const User = mongoose.model("user", UserSchema);

module.exports = User;
