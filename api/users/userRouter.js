const express = require("express");
const router = express.Router();

const Users = require("../users/userModel");

router.get("/", async (req, res) => {
  const users = await Users.find();
  res.status(200).json(users);
});

module.exports = router;
