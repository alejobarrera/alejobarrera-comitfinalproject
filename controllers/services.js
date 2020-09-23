//Database: finalproject
//Collection: services
var express = require('express');
var Service = require('../models/service');
//Show a list of items saved on the database
exports.listItems = function(req, res) {
    Service.find(function (err, services) {
        if (err) console.log(err)
        
        console.log(services)
        res.render('services/list-services', { 
            title: 'Services', 
            subtitle: 'Discover how we can help you and improve your skills',
            services: services 
        });
    });
};
//Show a form to add services and save them on the database
exports.AddItem = function(req, res) {
    res.render('services/add-service', {             
        title: 'User zone', 
        subtitle:'Manage the content of your website and keep it update.',
        sectiontitle: 'Add item - Services', 
        service: {}, 
        errors: [] 
    });
};
//Save the new service on the database
exports.CreateItem = function(req, res) {
    var headline = req.body.headline;
    var abstract = req.body.abstract;
    var image = req.body.image;
    var fulltext = req.body.fulltext;
    var newService = new Service({
        headline: headline,
        abstract: abstract,
        image: image,
        fulltext: fulltext      
    });

    newService.save(function(err) {
      if (err) {
          res.render('services/add-service', { service: ewService, errors: err.errors });
          console.log(err);
      } else {
          res.redirect('table-services');
          console.log('Services saved successfully!');
      }

    });
};
//Show a table with the items saved on the database for admin purposes
exports.AdminItems = function(req, res) {
    Service.find(function (err, services) {
        if (err) console.log(err)
        
        console.log(services)
        res.render('services/table-services', { 
            title: 'User zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Admin items - Services',
            services: services 
        });
    });
};
//Show full text for any user and option to delete for admin purposes
exports.ShowItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Service.findById(id, function (err, service) {
        if (err) console.log(err)
        
        console.log(service)
        res.render('services/show-service', { 
            title: 'Services', 
            subtitle: 'Discover how we can help you and improve your skills',
            service: service 
        });
    });
};
//Delete an item from the database
exports.DeleteItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Service.findById(id, function (err, service) {
        if (err) console.log(err)
        console.log(service)

        service.remove(function (err){
         if (err) console.log(err)
         res.redirect('/services/table-services')
        });        
    });
};
//Show a form to edit the information and update it on the database for admin purposes
exports.EditItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Service.findById(id, function (err, service) {
        if (err) console.log(err)
        console.log(service)

        res.render('services/edit-service', { 
            title: 'User zone', 
            subtitle:'Manage the content of your website and keep it update.',
            sectiontitle: 'Edit item - Service',
            service: service,
            errors: [] 
        });
    });
};
//Update the information on the database
exports.UpdateItem = function(req, res) {
    var id = req.params.id;
    var update = req.body;

    Service.findByIdAndUpdate(id, update, function (err, service) {
        if (err) console.log(err)
        console.log(service)
        res.redirect('/services/table-services')
    });
};