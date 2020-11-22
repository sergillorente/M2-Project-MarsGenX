const express = require("express");
const siteRouter = express.Router();

const members = require('../bin/members-mock-data');
const Member = require('../models/Member.model');
const posts = require('../bin/posts-mock-data')
const Post = require('../models/Post.model');

// Your routes

// get member page
siteRouter.get("/member", (req, res, next) => {
    res.render('Member')
})


// create a post

siteRouter.post("/member", (req, res, next) => {

    const {title, text, image,  creator } = req.body

    Member.create( {title, text, image,  creator}   )
    .then( (post)  => {
        res.redirect("/member");
    })
    .catch( (err) => console.log(err));
})






module.exports = siteRouter;
