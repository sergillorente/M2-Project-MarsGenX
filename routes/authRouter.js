const express = require("express");
const authRouter = express.Router();

// Your routes

const bcrypt = require('bcrypt');
const Member = require('../models/Member.model');
const zxcvbn = require('zxcvbn');

// Here we need to create the isLoggedIn js file

// authRouter Routes for signup

// this route will render the Signup form (page)
authRouter.get()


// this route will update the data in the DB
authRouter.post()



// this route will render the Login form (page)

authRouter.get()

// this route will update the data in the DB

authRouter.post()



module.exports = authRouter;
