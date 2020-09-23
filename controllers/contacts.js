var express = require('express');
var Contact = require('../models/contact');

//Form with the fields to add new item on the database
exports.AddItem = function(req, res) {
    res.render('contact-us/add-contact', { 
        title: 'Get in touch with us', 
        subtitle: ' We are here to answer all your questions about us or our services.', 
        successsave: false,
        contact: {},
        errors: [] 
    });
};
//Save the form on the database on the contact collections
exports.CreateItem = function(req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var phone = req.body.phone;
    var email = req.body.email;
    var subject = req.body.subject;
    var comment = req.body.comment;
    var status = req.body.status;

    var newContact = new Contact({
        firstname: firstname,
        lastname: lastname,
        phone: phone,
        email: email,
        subject: subject,
        comment: comment,
        status: status
    });

    newContact.save(function(err) {
        if (err) {
            res.render('contact-us/add-contact', { contact: newContact, errors: err.errors });
            console.log(err);
        }
        else {
            res.render('contact-us/add-contact', { 
                title: 'Get in touch with us', 
                subtitle: ' We are here to answer all your questions about us or our services.', 
                successsave: true,
                contact: {},
                errors: [] 
            });
            console.log('Contact saved successfully!');
        }
    });
};
//Show the contact saved on the database 
exports.AdminItems = function(req, res) {
    Contact.find(function (err, contacts) {
        if (err) console.log(err)   
        console.log(contacts)

        res.render('contact-us/table-contacts', { 
            title: 'Users Zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Admin items - Contact us', 
            contacts: contacts 
        });
    });
};
//Show fulltext for item selected
exports.ShowItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Contact.findById(id, function (err, contact) {
        if (err) console.log(err)
        console.log(contact)

        res.status(200).send({ contact: contact })
    });
};
//Form with the fields and previous information filled to edit a selected item
exports.EditItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Contact.findById(id, function (err, contact) {
        if (err) console.log(err)
        console.log(contact)

        res.render('contact-us/edit-contact', { 
            title: 'Users Zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Edit item - Contact us', 
            contact: contact,
            errors: [] 
        });
    });
};
//Save the form updated on the database on the collection contact
exports.UpdateItem = function(req, res) {
    var id = req.params.id;
    var update = req.body;

    Contact.findByIdAndUpdate(id, update, function (err, contact) {
        if (err) console.log(err)
        console.log(contact)
        res.redirect('/contact-us/table-contacts')
    });
};
//Delete an item from the database on the collection contact
exports.DeleteItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Contact.findById(id, function (err, contact) {
        if (err) console.log(err)
        console.log(contact)

        contact.remove(function (err){
         if (err) console.log(err)
         res.redirect('/contact-us/table-contacts')
        });        
    });
};
