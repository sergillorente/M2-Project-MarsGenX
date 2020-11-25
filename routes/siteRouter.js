const express = require("express");
const siteRouter = express.Router();
const parser = require("./../config/cloudinary");

const members = require("../bin/members-mock-data");
const Member = require("../models/Member.model");
const posts = require("../bin/posts-mock-data");
const Post = require("../models/Post.model");

// Middlewares

const isLoggedIn = require("./../utils/isLoggedIn");
// Your routes

// Member Page routes

siteRouter.get("/member", isLoggedIn, (req, res, next) => {

  const userId = req.session.currentUser._id; // Creation of the cookie for each member

  Member.findOne({ _id: userId }) // You are looking for an specific member by his/her id from all of those who are in the DB
    .then((member) => {
      Post.find()
        .populate('comments.member')
        .then((allPosts) => {
          const props = { member: member, allPosts: allPosts }; //WTF does this line? What are the values that is taking?
          res.render("Member", props);
        });
    });
});

// create a post

siteRouter.get('/posts/add/', isLoggedIn, (req, res, next) => {

  
  res.render("AddPost");
})

siteRouter.post("/posts/add", isLoggedIn, parser.single('image'), (req, res, next) => {
  // getting the values coming from the form inputs
  const { title, text, image } = req.body;
  
  let imageUrl;
  if (req.file) imageUrl = req.file.secure_url;

  const userId = req.session.currentUser._id;

  Post.create({ title, text, image: imageUrl })
    .then((post) => {
      res.redirect("/private/member");
    })
    .catch((err) => console.log(err));
});


// to update the current post

siteRouter.post("/posts/update/:postId", isLoggedIn, (req, res, next) => {

  const userId = req.session.currentUser._id;
  const creatorPost = req.session.post

  Post.find()
    .populate('creator')
})

siteRouter.post("/posts/update/:postId", isLoggedIn, (req, res, next) => {
  // getting the values coming from the form inputs
  const { title, text, image } = req.body;
  const userId = req.session.currentUser._id; // a cookie for the identification of the member (by its ID)
  const postId = req.params.postId;

  Post.update({ title, text, image, creator: userId })
    .then((post) => {
      res.redirect("/private/member");
    })
    .catch((err) => console.log(err));
});


siteRouter.get("/updatepost/:postId", isLoggedIn, (req, res, next) => {
  const postId = req.params.postId
  const props = { postId: postId };
  res.render("UpdatePost", props);
})


siteRouter.post("/updatepost/:postid", isLoggedIn, parser.single("image"), (req, res, next) => {
  // getting the values coming from the form inputs
  const { title, text, image } = req.body;

  let imageUrl;

  if (req.file) imageUrl = req.file.secure_url;
  
  const userId = req.session.currentUser._id; // a cookie for the identification of the member (by its ID)
  const postId = req.params.postid;

  Post.findByIdAndUpdate(postId, { title, text, image: imageUrl })
    .then((post) => {
      res.redirect("/private/member");
    })
    .catch((err) => console.log(err));
});

// to delete the post

siteRouter.get("/deletepost/:postId", isLoggedIn, (req, res, next) => {
  const postId = req.params.postId;
  Post.findByIdAndDelete(postId)
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


// Profile routes

siteRouter.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile");
})
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