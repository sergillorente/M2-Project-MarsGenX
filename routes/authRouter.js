const express = require("express");
const authRouter = express.Router();
const parser = require("./../config/cloudinary");

// Your routes

const bcrypt = require("bcrypt");
const Member = require("../models/Member.model");
const zxcvbn = require("zxcvbn");
const { isValidObjectId } = require("mongoose");
const isLoggedIn = require("../utils/isLoggedIn");

// Here we need to create the isLoggedIn js file

const saltRounds = 10;
// authRouter Routes for signup

// GET signup .This route will render the Signup form (page)
authRouter.get("/signup", (req, res, next) => {
  res.render("Signup");
});


// POST signup .This route will update the data in the DB
authRouter.post("/signup", parser.single("profilepic"), (req, res, next) => {
  // we are requesting the values from the form
  const { email, password } = req.body;

  let imageUrl;
  if (req.file) imageUrl = req.file.secure_url;

  if (email === "" || password === "") {
    const props = { errorMessage: "Enter email and password" };

    res.render("Signup", props);

    return;
  }

  // If we want to create a stronger password, we add the zxcvbn

  // Check if the email is already taken

  Member.findOne({ email: email })
    .then((foundMember) => {
      if (foundMember) {
        const props = { errorMessage: "Email is already taken. Try another!" };

        res.render("Signup", props);

        return;
      }

      // if email is available, encrypt its password

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // After encrypting the password, create the new member in DB

      Member.create({ email: email, password: hashedPassword, image: imageUrl })
        .then((createdMember) => {
          req.session.currentUser = createdMember;
          res.redirect("/private/member"); // it should redirect to the member page
        })

        .catch((error) => {
          console.log("Error in the redirection to the member page:", error);
        });
    })
    .catch((error) => {
      console.log("Error of the whole signup route", error);
    });
});

// GET log in

authRouter.get("/login", (req, res, next) => {
  res.render("Login");
});

authRouter.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  if (email === "" || password === "") {
    const props = { errorMessage: "Enter an email and a password" };

    res.render("Login", props);
    return;
  }

  Member.findOne({ email })
    .then((member) => {
    if (!email) {
      // If the user by the given email was not found, send error message
      const props = { errorMessage: "The user does not exist" };

      res.render("Login", props);
      return;
    }
    
    const passwordCorrect = bcrypt.compareSync(password, member.password);

    if (passwordCorrect) {
      // Create the session - which also triggers the creation of the cookie
      req.session.currentMember = member;

      res.redirect("/private/member"); 
    } else {
      res.render("Login", { errorMessage: "Incorrect password" });
    }
  });
});

// Log out Route /auth/logout

authRouter.get("/logout", isLoggedIn, (req, res, next) => {
  req.session.destroy((error) => {
    if (error) {
      res.render('Error')
    }
    else {
      res.redirect('/auth/login');
    }
  })
}) 

module.exports = authRouter;
