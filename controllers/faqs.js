var express = require('express');
var Faq = require('../models/faq');

exports.addfaqForm = function(req, res) {
    res.render('faqs/add-faq', { title: 'New FAQ', faq: {}, errors: [] });
};

exports.faqCreate = function(req, res) {
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
          res.redirect('/');
          console.log('Faq saved successfully!');
      }

    });
};