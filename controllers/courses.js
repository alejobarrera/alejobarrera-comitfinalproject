var express = require('express');
var Course = require('../models/course');
var Category = require('../models/category');

exports.list = function(req, res) {
    Course.find(function (err, courses) {
        if (err) console.log(err)
        
        console.log(courses)
        res.render('courses/list', { title: 'Courses', courses: courses });
    });
};

exports.addForm = function(req, res) {
    res.render('courses/add-course', { title: 'Users Zone', subtitle: 'Add New Course', course: {}, errors: [] });
};

exports.table = function(req, res) {
    Course.find(function (err, courses) {
        if (err) console.log(err)
        
        console.log(courses)
        res.render('courses/table-courses', { title: 'All courses', courses: courses });
    });
};



exports.fulltext = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Course.findById(id, function (err, course) {
        if (err) console.log(err)
        
        console.log(course)
        res.render('courses/fulltext', { title: 'Fulltext', course: course });
    });
};

exports.listCategories = function(req, res) {
    Categories.find(function (err, categories) {
        if (err) console.log(err)
        console.log(categories)
        res.render('courses/list-categories', { title: 'Courses', categories: categories });
    });
};

exports.categories = function(req, res) {
    res.render('courses/categories', { title: 'Users Zone', subtitle: 'Categories', category: {}, errors: [] });
};
exports.CreateCategory = function(req, res){
    var headline = req.body.headline;
    var abstract = req.body.abstract;

    var newCategory = new Category({
        headline: headline,
        abstract: abstract,
    });

    newCategory.save(function(err) {     
        if (err) {
        res.render('courses/categories', { category: newCategory, errors: err.errors });
        console.log(err);
        } else {
        res.redirect('categories');
        console.log('Category saved successfully!');
        }
    });
};


exports.Create = function(req, res) {
    var headline = req.body.headline;
    var delivery = req.body.delivery;
    var abstract = req.body.abstract;
    var image = req.body.image;
    var fulltext = req.body.fulltext;
    var contactname = req.body.contactname;
    var contactemail = req.body.contactemail;
    var contactphone = req.body.contactphone;

    var newCourse = new course({
        headline: headline,
        delivery: delivery,
        abstract: abstract,
        image: image,
        fulltext: fulltext,
        contactname: contactname,
        contactemail: contactemail,
        contactphone: contactphone,
    });

    newCourse.save(function(err) {
      if (err) {
          res.render('courses/add-course', { course: newCourse, errors: err.errors });
          console.log(err);
      } else {
          res.redirect('table-course');
          console.log('Course saved successfully!');
      }

    });
};