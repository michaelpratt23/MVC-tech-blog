const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = [{ username: "john_doe", password: "password123" }];
const postData = [
  { title: "First Post", content: "This is a blog post!", user_id: 1 },
];
const commentData = [{ comment_text: "Great post!", user_id: 1, post_id: 1 }];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await User.bulkCreate(userData, { individualHooks: true });
  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);
  console.log("Database seeded!");
  process.exit(0);
};

seedDatabase();
