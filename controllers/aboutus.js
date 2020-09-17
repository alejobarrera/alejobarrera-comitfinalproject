//Database: finalproject
//Collection: aboutus
var express = require('express');
var Aboutus = require('../models/aboutus');
//Show all fields saved on the database
exports.ShowItems = function(req, res) {
    Aboutus.find(function (err, aboutus) {
        if (err) console.log(err)
        
        console.log(aboutus)
        res.render('about-us/show-aboutus', { title: 'About us', aboutus: aboutus });
    });
};
//Show a form to add about us and save them on the database
exports.AddItem = function(req, res) {
    res.render('about-us/add-aboutus', { title: 'New post', aboutus: {}, errors: [] });
};
//Save the new about us on the database
exports.CreateItem = function(req, res) {
    var whatwedo = req.body.whatwedo;
    var ourmission = req.body.ourmission;
    var ourvission = req.body.ourvission;
    var headline = req.body.headline;
    var abstract = req.body.abstract;

    var newAboutus = new Aboutus({
        whatwedo: whatwedo,
        ourmission: ourmission,
        ourvission: ourvission,
        headline: headline,
        abstract: abstract,
    });

    newAboutus.save(function(err) {
      if (err) {
          res.render('about-us/add-aboutus', { aboutus: newAboutus, errors: err.errors });
          console.log(err);
      } else {
          res.redirect('table-aboutus');
          console.log('About us saved successfully!');
      }

    });
};
//Show a table with the items saved on the database for admin purposes
exports.AdminItems = function(req, res) {
    Aboutus.find(function (err, aboutus) {
        if (err) console.log(err)
        
        console.log(aboutus)
        res.render('about-us/table-aboutus', { title: 'All posts', aboutus: aboutus });
    });
};
//Delete an item from the database
exports.DeleteItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Aboutus.findById(id, function (err, aboutus) {
        if (err) console.log(err)
        console.log(aboutus)

        aboutus.remove(function (err){
         if (err) console.log(err)
         res.redirect('/about-us/table-aboutus')
        });        
    });
};
//Show a form to edit the information and update it on the database for admin purposes
exports.EditItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Aboutus.findById(id, function (err, aboutus) {
        if (err) console.log(err)
        console.log(aboutus)

        res.render('about-us/edit-aboutus', { 
            title: 'User zone', 
            subtitle:'Admin user here',
            sectiontitle: 'Edit item - Posts',
            aboutus: aboutus,
            errors: [] 
        });
    });
};
//Update the information on the database
exports.UpdateItem = function(req, res) {
    var id = req.params.id;
    var update = req.body;

    Aboutus.findByIdAndUpdate(id, update, function (err, aboutus) {
        if (err) console.log(err)
        console.log(aboutus)
        res.redirect('/about-us/table-aboutus')
    });
};