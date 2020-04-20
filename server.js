const express = require("express");
const helmet = require("helmet");
const authRouter = require("./api/auth/authRouter");
const userRouter = require("./api/users/userRouter");
const postRouter = require("./api/posts/postRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/", authRouter);
server.use("/api/users", userRouter);
server.use("/api/posts", postRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "running" });
});

module.exports = server;
