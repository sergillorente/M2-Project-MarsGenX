const express = require("express");
const siteRouter = express.Router();

const members = require('../bin/members-mock-data');
const Member = require('../models/Member.model');
const posts = require('../bin/posts-mock-data')
const Post = require('../models/Post.model');

// Your routes
siteRouter.get("/member", (req, res, next) => {
    res.render('Member')
})

siteRouter.post("/member", (req, res, next) => {
    req.body()
})

// const {'title', 'text', 'likes', 'image', 'comments', 'creator' } = req.body




module.exports = siteRouter;
