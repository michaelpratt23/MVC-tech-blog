const router = require("express").Router();
const { Post, User } = require("../models");
const withAuth = require("../utils/auth");

// Get user dashboard
router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { user_id: req.session.user_id },
      include: [{ model: User, attributes: ["username"] }],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("dashboard", { posts, logged_in: true });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
