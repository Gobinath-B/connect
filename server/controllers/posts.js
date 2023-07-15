/** @format */
const Post = require("../models/Posts");
const getAllPosts = async (req, res) => {
     try {
          const posts = await Post.find();
          res.status(200).json(posts);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};

const getPostById = async (req, res) => {
     const id = req.params.id;
     try {
          const post = await Post.findById(id);
          res.status(200).json(post);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};

const createPost = async (req, res) => {
     const post = req.body;
     try {
          const newPost = await Post.create({ ...post });
          res.status(201).json(newPost);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};

const updatePost = async (req, res) => {
     const id = req.params.id;
     const updatedPost = req.body;
     try {
          const result = await Post.findByIdAndUpdate(id, updatedPost, { new: true });
          res.status(200).json(result);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};

const deletePost = async (req, res) => {
     const id = req.params.id;
     try {
          const result = await Post.findByIdAndDelete(id);
          res.status(200).json(result);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};

module.exports = {
     getAllPosts,
     getPostById,
     createPost,
     updatePost,
     deletePost,
};
