const { response } = require('express');
const User = require ('../Model/userDB');
exports.postSignup = (req, res) => {
    const { email, password,  name } = req.body;

    const userObj = new User ({
        email,
        password,
        name
    });
    userObj.save()
    .then(response => {
        res.status(200).json({
            message: "User Details Saved Successfully",
        signup: response
        })
        
    })
    .catch(err => {
        res.status(5500).json({ error: err })
    })
}

// BELOW CODE BELONG TO LOGIN PAGE

exports.postlogin = (req, res) => {                           // BELOW CODE BELONG TO LOGIN PAGE
    const { email, password } = req.body;

    User.find({
        email,
        password
    })
    .then( response => {
        if(response.length > 0){
            res.status(200).json({
                message: "User Details Fetched Successfully",
                login: response,
                isAuthenticated: true
            })
        }else{
            res.status(200).json({
                message: "User Details Not Found",
            login: response,
            isAuthenticated: false

            })

        }

    })
    .catch(err => {
        res.status(5500).json({ error: err });
    })
}