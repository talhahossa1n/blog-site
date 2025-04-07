const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

const homeStartingContent = `Horem hipsum dolor sit amet, consectetur adipiscing elit. Sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
const aboutContent = `Aorem aipsum dolor sit amet, consectetur adipiscing elit. Sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;
const contactContent = `Corem cipsum dolor sit amet, consectetur adipiscing elit. Sed do 
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis 
aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`;

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/blogDB");

const postSchema = {
  title: String,
  content: String,
};

const Post = mongoose.model("Post", postSchema);

app.get("/", function (req, res) {
  Post.find({})
    .then((foundPosts) => {
      res.render("home", {
        startingContent: homeStartingContent,
        posts: foundPosts,
      });
    })
    .catch((err) => {
      console.error("Error retrieving posts:", err);
    });
});

app.get("/about", function (req, res) {
  res.render("about", { aboutContent });
});

app.get("/contact", function (req, res) {
  res.render("contact", { contactContent });
});

app.get("/compose", function (req, res) {
  res.render("compose");
});

app.post("/compose", function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  });
  post
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error saving post:", err);
    });
});

app.get("/posts/:postId", function (req, res) {
  const requestedPostId = req.params.postId;

  Post.findById(requestedPostId)
    .then((foundPost) => {
      if (foundPost) {
        res.render("post", {
          title: foundPost.title,
          content: foundPost.content,
          postId: foundPost._id
        });
      } else {
        res.status(404).send("Post not found");
      }
    })
    .catch((err) => {
      console.error("Error retrieving post:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.post("/delete", function (req, res) {
  const postId = req.body.postId;

  Post.findByIdAndDelete(postId)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.error("Error deleting post:", err);
      res.status(500).send("Internal Server Error");
    });
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
