/** @format */

const express = require("express");
const router = express.Router();
const { getAllPosts, createPost, getPostById, updatePost, deletePost } = require("../controllers/posts");

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPostById).put(updatePost).delete(deletePost);

module.exports = router;
