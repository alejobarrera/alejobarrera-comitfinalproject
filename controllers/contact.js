var express = require('express');
var Contact = require('../models/contact');

exports.contactForm = function(req, res) {
    res.render('contact/add-contact', { title: 'Contact us', contact: {}, errors: [] });
};

exports.contactCreate = function(req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phone = req.body.phone;
    var email = req.body.email;
    var subject = req.body.subject;
    var comment = req.body.comment;

    var newContact = new Contact({
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        subject: subject,
        comment: comment
    });

    newContact.save(function(err) {
      if (err) {
          res.render('contact/new', { contact: newContact, errors: err.errors });
          console.log(err);
      } else {
          res.redirect('/');
          console.log('Contact saved successfully!');
      }

    });
};