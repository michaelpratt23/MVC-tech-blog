const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth"); // Middleware to protect routes

// Create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a post
router.put("/:id", withAuth, async (req, res) => {
  try {
    const post = await Post.update(
      { title: req.body.title, content: req.body.content },
      { where: { id: req.params.id, user_id: req.session.user_id } }
    );

    if (!post) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a post
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const post = await Post.destroy({
      where: { id: req.params.id, user_id: req.session.user_id },
    });

    if (!post) {
      res.status(404).json({ message: "No post found with this id!" });
      return;
    }

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
