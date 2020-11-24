const express = require("express");
const siteRouter = express.Router();

const members = require("../bin/members-mock-data");
const Member = require("../models/Member.model");
const posts = require("../bin/posts-mock-data");
const Post = require("../models/Post.model");

// Middlewares

const isLoggedIn = require("./../utils/isLoggedIn");

// Your routes

// member page routes

// GET   /private/member
siteRouter.get("/member", isLoggedIn, (req, res, next) => {
  const userId = req.session.currentUser._id;
  // const { _id } = req.session.currentUser;

  Member.findOne({ _id: userId }).then((member) => {
    
    Post.find()
      .then((allPosts) => {
        const props = { member: member, allPosts: allPosts };
        res.render("Member", props);
      })
    
  });
});

// Router that renders the posts add form
// siterRouter.get

// create a post

siteRouter.post("/posts/add", isLoggedIn, (req, res, next) => {
  // getting the values coming from the form inputs
  const { title, text, image } = req.body;

  const userId = req.session.currentUser._id;

  Post.create({ title, text, image, creator: userId })
    .then((post) => {
      res.redirect("/private/member");
    })
    .catch((err) => console.log(err));
});

// to update the current post

siteRouter.post("/posts/update/:postId", isLoggedIn, (req, res, next) => {
  const { title, text, image } = req.body;
  const userId = req.session.currentUser._id;
  const postId = req.params.postId;
  Post.update({ title, text, image, creator: userId })
    .then((post) => {
      res.redirect("/private/member");
    })
    .catch((err) => console.log(err));
});

// to delete the post

siteRouter.delete("/posts/delete", (req, res, next) => {});

// profile routes

siteRouter.get("/edit-profile", (req, res, next) => {
  res.render("Profile");
});

module.exports = siteRouter;
