const express = require("express");
const router = express.Router();

const Posts = require("./postModel");

router.get("/", async (req, res) => {
  const posts = await Posts.find();
  res.status(200).json(posts);
});

module.exports = router;
