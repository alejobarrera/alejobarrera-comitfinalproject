//Database: finalproject
//Collection: courses and categories
var express = require('express');
var Course = require('../models/course');
var Category = require('../models/category');
//Show a list of items saved on the database
exports.listItems = function(req, res) {
    Course.find(function (err, courses) {
        if (err) console.log(err)
        
        console.log(courses)
        res.render('courses/list-courses', { 
            title: 'Courses', 
            subtitle: 'Discover our courses and choose how you want them to deliver',
            courses: courses 
        });
    });
};
//Show a form to add courses and save them on the database
exports.AddItem = function(req, res) {
    res.render('courses/add-course', { 
        title: 'Users Zone', 
        subtitle:'Manage the content of your website and keep it update.',
        sectiontitle: 'Add item - Courses', 
        course: {}, errors: [] 
    });
};
//Save the new course on the database
exports.CreateItem = function(req, res) {
    var headline = req.body.headline;
    var delivery = req.body.delivery;
    var abstract = req.body.abstract;
    var image = req.body.image;
    var fulltext = req.body.fulltext;
    var contactname = req.body.contactname;
    var contactemail = req.body.contactemail;
    var contactphone = req.body.contactphone;
    var newCourse = new Course({
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
          res.redirect('table-courses');
          console.log('Course saved successfully!');
      }
    });
};
//Show a table with the items saved on the database for admin purposes
exports.AdminItems = function(req, res) {
    Course.find(function (err, courses) {
        if (err) console.log(err)
        
        console.log(courses)
        res.render('courses/table-courses', { 
            title: 'User zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Admin items - Courses',
            courses: courses 
        });
    });
};
//Show full text for any user and option to delete for admin purposes
exports.ShowItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Course.findById(id, function (err, course) {
        if (err) console.log(err)
        
        console.log(course)
        res.render('courses/show-course', { 
            title: 'Services',
            subtitle: 'Discover our courses and choose how you want them to deliver',
            course: course
        });
    });
};
//Delete an item from the database
exports.DeleteItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Course.findById(id, function (err, course) {
        if (err) console.log(err)
        console.log(course)

        course.remove(function (err){
         if (err) console.log(err)
         res.redirect('/courses/table-courses')
        });        
    });
};
//Show a form to edit the information and update it on the database for admin purposes
exports.EditItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Course.findById(id, function (err, course) {
        if (err) console.log(err)
        console.log(course)

        res.render('courses/edit-course', { 
            title: 'User zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Edit item - Courses',
            course: course,
            errors: [] 
        });
    });
};
//Update the information on the database
exports.UpdateItem = function(req, res) {
    var id = req.params.id;
    var update = req.body;

    Course.findByIdAndUpdate(id, update, function (err, course) {
        if (err) console.log(err)
        console.log(course)
        res.redirect('/courses/table-courses')
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


