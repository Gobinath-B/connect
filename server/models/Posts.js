/** @format */

//write schema for linkedIn posts

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
     user_id: String,
     name: String,
     title: String,
     post: String,
     date: String,
     likes: Number,
     comments: Number,
     shares: Number,
     image: String,
});

const Posts = mongoose.model("posts", PostSchema);

module.exports = Posts;
//create model
