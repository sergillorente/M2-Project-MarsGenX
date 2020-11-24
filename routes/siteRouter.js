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
    .populate('comments.member')
    .then((allPosts) => {
      console.log(allPosts[0].comments);
      const props = { member: member, allPosts: allPosts };
      res.render("Member", props);
    });
  });
});

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

// add comment to post

siteRouter.post("/posts/comment/:postId", isLoggedIn, (req, res, next) => {
  const { comment } = req.body;
  const userId = req.session.currentUser._id;
  const postId = req.params.postId;

  const newComment = {
    member: userId,
    comment: comment,
  };

  Post.findByIdAndUpdate(postId, { $push: { comments: newComment } })
    .then((post) => {
      res.redirect("/private/member");
    })
    .catch((err) => console.log(err));
});

// to delete the post

siteRouter.delete("/posts/delete", isLoggedIn, (req, res, next) => {
  const { title, text, image } = req.body;
  const userId = req.session.currentUser._id;

  Post.delete({ title, text, image, creator: userId })
    .then((post) => {
      res.redirect("/private/member");
    })
    .catch((err) => console.log(err));
});

// profile routes

siteRouter.get("/edit-profile", isLoggedIn, (req, res, next) => {
  const userId = req.session.currentUser._id;

  Member.findOne({ _id: userId }).then((member) => {
    const props = { member: member };
    res.render("Profile", props);
  });
});

siteRouter.post("/edit-profile", isLoggedIn, (req, res, next) => {
  const { username, nickname, greeting, profilepic } = req.body;
  const userId = req.session.currentUser._id;

  Post.create({ username, nickname, greeting, profilepic, creator: userId })
    .then((post) => {
      res.redirect("/edit/profile");
    })
    .catch((err) => console.log(err));
});

// Donation routes

siteRouter.get("/donation", isLoggedIn, (req, res, next) => {
  const userId = req.session.currentUser._id;

  Member.findOne({ _id: userId }).then((member) => {
    const props = { member: member };
    res.render("Donation", props);
  });
});

siteRouter.post("/donation", isLoggedIn, (req, res, next) => {
  const { amount } = req.body;
  const userId = req.session.currentUser._id;

  Post.create({ amount, creator: userId })
    .then((post) => {
      res.redirect("Member");
    })
    .catch((err) => console.log(err));
});

module.exports = siteRouter;
