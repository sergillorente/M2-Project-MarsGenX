const express = require("express");
const siteRouter = express.Router();

const members = require('../bin/members-mock-data');
const Member = require('../models/Member.model');
const posts = require('../bin/posts-mock-data')
const Post = require('../models/Post.model');

// Your routes

module.exports = siteRouter;
