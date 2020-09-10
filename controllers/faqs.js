var express = require('express');
var Faq = require('../models/faq');

exports.list = function(req, res) {
    Faq.find(function (err, faqs) {
        if (err) console.log(err)
        
        console.log(faqs)
        res.render('faqs/list', { title: 'FAQs', faqs: faqs });
    });
};

exports.addForm = function(req, res) {
    res.render('faqs/add-faq', { title: 'New FAQ', faq: {}, errors: [] });
};

exports.table = function(req, res) {
    Faq.find(function (err, faqs) {
        if (err) console.log(err)
        
        console.log(faqs)
        res.render('faqs/table-faqs', { title: 'All faqs', faqs: faqs });
    });
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
          res.redirect('table-faqs');
          console.log('Faq saved successfully!');
      }

    });
};