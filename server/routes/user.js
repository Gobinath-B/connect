/** @format */
const express = require("express");
const router = express.Router();
const { loginUser, registerUser, getUserById } = require("../controllers/user");

router.route("/login").post(loginUser);
router.route("/register").post(registerUser);
router.route("/:id").get(getUserById);

module.exports = router;
