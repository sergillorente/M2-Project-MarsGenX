const express = require("express");
const siteRouter = express.Router();

const members = require("../bin/members-mock-data");
const Member = require("../models/Member.model");
const posts = require("../bin/posts-mock-data");
const Post = require("../models/Post.model");

// Middlewares

const isLoggedIn = require("./../utils/isLoggedIn");

// Your routes

// Member Page routes

// GET   /private/member
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

// update the same post. Only if the current member is the one who wrote the post
// delete the same post. Only if the current member is the one who wrote the post

// to update the current post
siteRouter.post("/posts/update/:postId", isLoggedIn, (req,res,next) => {
  const userId = req.session.currentUser._id;
  
  const creatorPost = req.session.post
  Post.find()
  .populate('creator')
})






siteRouter.post("/posts/update/:postId", isLoggedIn, (req, res, next) => {
    // getting the values coming from the form inputs
  const { title, text, image } = req.body;

  const userId = req.session.currentUser._id; // a cookie for the identification of the member (by its ID)

  const postId = req.params.postId; // Why do we take the params here?
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

// to update the current post

siteRouter.post("/posts/update/:postId", isLoggedIn, (req, res, next) => {
  // getting the values coming from the form inputs
const { title, text, image } = req.body;

// const postId = req.params.postId;
const userId = req.session.currentUser._id; // a cookie for the identification of the member (by its ID)
const creator = Post.creator;

if (creator === userId) {
  Post.update({ title, text, image })
  .then((post) => {
    res.redirect("/private/member");
    return;
  })
  .catch((err) => console.log(err));
}



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


//main profile routes

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


// postsettings routes

siteRouter.post("/posts/update/:postid", isLoggedIn, (req, res, next) => {
  // getting the values coming from the form inputs
const { title, text, image } = req.body;

const userId = req.session.currentUser._id; // a cookie for the identification of the member (by its ID)

const postId = req.params.postid;
Post.findByIdAndUpdate(postId, { title, text, image })
  .then((post) => {
    res.redirect("/private/member");
  })
  .catch((err) => console.log(err));
});




siteRouter.get("/postsettings", isLoggedIn, (req, res, next) => {
  res.render("postsettings");
})




module.exports = siteRouter;
