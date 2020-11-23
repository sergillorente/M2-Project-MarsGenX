const isLoggedIn = (req, res, next) =>{
    if (req.session.currentUser) {
        next();
    }
    else {
        console.log('Unauthorised')

        res.send('Unauthorised')
    }
}

module.exports = isLoggedIn;