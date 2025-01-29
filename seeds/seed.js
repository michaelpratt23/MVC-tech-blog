const sequelize = require("../config/connection");
const { User, Post, Comment } = require("../models");

const userData = [
  { username: "john_doe", password: "password123" },
  { username: "jane_doe", password: "securepass" },
];

const postData = [
  { title: "First Post!", content: "This is my first post!", user_id: 1 },
  { title: "Second Post", content: "Tech blogs are fun!", user_id: 2 },
];

const commentData = [
  { comment_text: "Nice post!", user_id: 2, post_id: 1 },
  { comment_text: "Thanks for sharing!", user_id: 1, post_id: 2 },
];

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, { individualHooks: true });
  await Post.bulkCreate(postData);
  await Comment.bulkCreate(commentData);

  console.log("Database seeded!");
  process.exit(0);
};

seedDatabase();
