const express = require("express");
const Comment = require("../models/Comment");
const auth = require("../middleware/auth");

const router = express.Router();

// ADD COMMENT (protected)
router.post("/", auth, async (req, res) => {
    try {
        const { text, PostId } = req.body;

        const comment = await Comment.create({
            text,
            PostId,
            UserId: req.user.id
        });

        res.json(comment);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET COMMENTS FOR A POST
router.get("/:postId", async (req, res) => {
    const comments = await Comment.findAll({
        where: { PostId: req.params.postId }
    });

    res.json(comments);
});

module.exports = router;