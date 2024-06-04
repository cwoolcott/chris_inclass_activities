const withFirstName = (req, res, next) => {
    if (req.session.firstName){
        next();
    }
    else{
        res.redirect('/register')
    }
}

module.exports = withFirstName;