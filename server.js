require("dotenv").config();

const express = require("express");
const sequelize = require("./config/db");

const User = require("./models/User");
const Post = require("./models/Post"); 
const Comment = require("./models/Comment");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");

const app = express();

app.use(express.json());

// routes
app.use("/auth", authRoutes);
app.use("/posts",postRoutes);
app.use("/comments", commentRoutes);

app.get("/", (req, res) => {
    res.send("Blog Backend Running");
});

sequelize.authenticate()
    .then(() => {
        console.log("Database connected");

        return sequelize.sync({alter: true });
    })
    .then(() => {
        console.log("Tables created");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => {
        console.log("Database error:", err);
    });