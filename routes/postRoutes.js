const express = require("express");
const Post = require("../models/Post");
const auth = require("../middleware/auth");

const router = express.Router();

// CREATE POST (protected)
router.post("/", auth, async (req, res) => {
    try {
        const { title, content } = req.body;

        const post = await Post.create({
            title,
            content,
            UserId: req.user.id
        });

        res.json(post);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET ALL POSTS
router.get("/", async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
});

// GET SINGLE POST
router.get("/:id", async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.json(post);
});

module.exports = router;