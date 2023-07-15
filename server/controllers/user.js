/** @format */
const User = require("../models/user");
// const generateToken = require("../utils/generateToken");

const getUserById = async (req, res) => {
     const id = req.params.id;
     try {
          const user = await User.findById(id);
          res.status(200).json(user);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};
const registerUser = async (req, res) => {
     const user = req.body;
     try {
          const newUser = await User.create({ ...user });
          res.status(201).json(newUser);
     } catch (error) {
          res.status(500).json({ message: error.message });
     }
};
const loginUser = async (req, res) => {
     const { email, password } = req.body;

     if (!email || !password) {
          res.status(400).json({ message: "Please provide email and password" });
     }

     try {
          User.find().toArray((err, documents) => {
               if (err) {
                    console.log(err);
                    res.status(500).send({ message: err });
               } else {
                    const result = documents.find((x) => x.email === email && x.password === password);
                    if (result) {
                         res.status(200).json(result);
                    }
               }
          });
     } catch (error) {
          throw new Error(error.message);
     }
};

module.exports = {
     getUserById,
     registerUser,
     loginUser,
};
