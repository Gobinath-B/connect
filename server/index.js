/** @format */
const express = require("express");
const connectDB = require("./db/mongoose");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const user_routes = require("./routes/user");
const post_routes = require("./routes/posts");
const port = 5000;
require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/user", user_routes);
app.use("/posts", post_routes);
const startServer = async () => {
     try {
          await connectDB(process.env.DB_PATH);
          app.listen(port, () => {
               console.log(`CONNECT STARTED: Example app listening at http://localhost:${port}`);
          });
     } catch (error) {
          throw error;
     }
};

startServer();

app.get("/", (req, res) => {
     res.send("App is Working");
});

// Path: server\index.js
