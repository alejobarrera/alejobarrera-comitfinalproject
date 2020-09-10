var express = require('express');
var Service = require('../models/service');

exports.list = function(req, res) {
    Service.find(function (err, services) {
        if (err) console.log(err)
        
        console.log(services)
        res.render('services/list', { title: 'Services', services: services });
    });
};

exports.addForm = function(req, res) {
    res.render('services/add-service', { title: 'New service', service: {}, errors: [] });
};

exports.table = function(req, res) {
    Service.find(function (err, services) {
        if (err) console.log(err)
        
        console.log(services)
        res.render('services/table-services', { title: 'All services', services: services });
    });
};

exports.fulltext = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Service.findById(id, function (err, service) {
        if (err) console.log(err)
        
        console.log(service)
        res.render('services/fulltext', { title: 'Fulltext', service: service });
    });
};

exports.Create = function(req, res) {
    var headline = req.body.headline;
    var abstract = req.body.abstract;
    var image = req.body.image;
    var fulltext = req.body.fulltext;
    var author = req.body.author;

    var newService = new Services({
        headline: headline,
        abstract: abstract,
        image: image,
        fulltext: fulltext,
        author: author,
        authoremail: authoremail,
        source: source,
        sourceurl: sourceurl
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