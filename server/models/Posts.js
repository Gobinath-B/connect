/** @format */

//write schema for linkedIn posts

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
     userID: String,
     userEmail: String,
     timeStamp: String,
     postImage: String,
     status: String,
     likes: Number,
});

const Posts = mongoose.model("posts", PostSchema);

module.exports = Posts;
//create model
