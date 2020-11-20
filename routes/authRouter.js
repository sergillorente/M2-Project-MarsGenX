const express = require("express");
const authRouter = express.Router();

// Your routes

const bcrypt = require('bcrypt');
const Member = require('../models/Member.model');
const zxcvbn = require('zxcvbn');

// Here we need to create the isLoggedIn js file

const saltRounds = 10;
// authRouter Routes for signup

// this route will render the Signup form (page)
authRouter.get('/signup', (req, res, next) => {
    res.render('Signup');
})


// this route will update the data in the DB
authRouter.post('/signup', (req, res, next) => {

    // we are requesting the values from the form
    const {email, password} = req.body

    if (email === '' || password === '') {
        const props = {errorMessage: 'Enter the email and password'}

        res.render('Signup', props)

        return;
    }

    // If we want to create a stronger password, we add the zxcvbn 

    // Check if the email is already taken

    Member.findOne({email: email})
    .then ((email) => {
        if (email) {
            const props = {errorMessage: 'Email is already taken. Try another!'}

            res.render('Signup', props)

            return;
        }

        // if email is available, encrypt its password

        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);

        // After encrypting the password, create the new member in DB

        Member.create({email: email, password: hashedPassword})
            .then((createdMember) => {

                res.redirect('/private/member'); // it should redirect to the member page
            })

            .catch((error) => {
                console.log('Error in the redirection to the member page:', error)
            })
        
    })
    .catch((error) => {
        console.log('Error of the whole signup route', error)
    })
})



// this route will render the Login form (page)

// authRouter.get()

// this route will update the data in the DB

// authRouter.post()



module.exports = authRouter;
