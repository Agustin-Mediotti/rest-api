const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("We are on post");
});

router.get("/user", (req, res) => {
  res.send("We are on user");
});

router.post("/", (req, res) => {
  const newPost = new Post({
    title: req.body.title,
    description: req.body.description,
  });

  newPost
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
});

module.exports = router;
