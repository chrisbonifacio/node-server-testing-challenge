const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const Users = require("../users/userModel");

router.post("/register", async (req, res) => {
  const user = req.body;
  const newUser = await Users.add({
    ...user,
    password: bcrypt.hashSync(user.password, 8)
  });
  res.status(201).json(newUser);
});

module.exports = router;
