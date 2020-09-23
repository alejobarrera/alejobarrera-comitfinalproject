//Database: finalproject
//Collection: faqs
var express = require('express');
var Faq = require('../models/faq');
//Show a list of items saved on the database
exports.listItems = function(req, res) {
    Faq.find(function (err, faqs) {
        if (err) console.log(err)
        
        console.log(faqs)
        res.render('faqs/list-faqs', { 
            title: 'FAQs', 
            subtitle: 'Discover a quick answer to your questions',
            faqs: faqs 
        });
    });
};
//Show a form to add faqs and save them on the database
exports.AddItem = function(req, res) {
    res.render('faqs/add-faq', { 
        title: 'Users Zone', 
        subtitle:'Manage the content of your website and keep it update.',
        sectiontitle: 'Add item - FAQs',  
        faq: {}, 
        errors: [] 
    });
};
//Save the new faq on the database
exports.CreateItem = function(req, res) {
    var question = req.body.question;
    var answer = req.body.answer;
    var newFaq = new Faq ({
        question: question,
        answer: answer,
    });
    newFaq.save(function(err) {
      if (err) {
          res.render('faqs/add-faq', { faq: newFaq, errors: err.errors });
          console.log(err);
      } else {
          res.redirect('table-faqs');
          console.log('Faq saved successfully!');
      }
    });
};

//Show a table with the items saved on the database for admin purposes
exports.AdminItems = function(req, res) {
    Faq.find(function (err, faqs) {
        if (err) console.log(err)
        
        console.log(faqs)
        res.render('faqs/table-faqs', { 
            title: 'Users Zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Admin items - FAQs',  
            faqs: faqs 
        });
    });
};
//Delete an item from the database
exports.DeleteItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Faq.findById(id, function (err, faq) {
        if (err) console.log(err)
        console.log(faq)

        faq.remove(function (err){
         if (err) console.log(err)
         res.redirect('/faqs/table-faqs')
        });        
    });
};
//Show a form to edit the information and update it on the database for admin purposes
exports.EditItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Faq.findById(id, function (err, faq) {
        if (err) console.log(err)
        console.log(faq)

        res.render('faqs/edit-faq', { 
            title: 'Users Zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Edit item - FAQs', 
            faq: faq,
            errors: [] 
        });
    });
};
//Update the information on the database
exports.UpdateItem = function(req, res) {
    var id = req.params.id;
    var update = req.body;

    Faq.findByIdAndUpdate(id, update, function (err, faq) {
        if (err) console.log(err)
        console.log(faq)
        res.redirect('/faqs/table-faqs')
    });
};

