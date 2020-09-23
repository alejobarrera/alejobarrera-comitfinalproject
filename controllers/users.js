//Database: finalproject
//Collection: aboutus
var express = require('express');
var User = require('../models/user');
var service = require('../services')

function signUp (req, res) {

    const newUser = new User ({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })

    newUser.save (err  => {
        if (err) res.status(500).send({ message: `Error creating user: ${err}`})
        return res.status(200).send({token: service.createToken(newUser)})
    })
}

function signIn (req, res) {
    User.find({ email: req.body.email}, (err,user) => {
        if (err) return res.status(500).send({message: err})
        if (!user) return res.status(404).send({message: 'User does not exist'})

        req.user = user
        return res.status(200).send({message: 'SignIn sussecesful', token: service.createToken(user)})

 
    })
}

module.exports = {
    signUp,
    signIn
}