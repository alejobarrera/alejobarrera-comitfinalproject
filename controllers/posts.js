var express = require('express');
var Post = require('../models/post');

exports.addpostForm = function(req, res) {
    res.render('posts/add-post', { title: 'New post', post: {}, errors: [] });
};

exports.postCreate = function(req, res) {
    var headline = req.body.headline;
    var abstract = req.body.abstract;
    var image = req.body.image;
    var fulltext = req.body.fulltext;
    var author = req.body.author;
    var authoremail = req.body.authoremail;
    var source = req.body.source;
    var sourceurl = req.body.sourceurl;

    var newPost = new Post({
        headline: headline,
        abstract: abstract,
        image: image,
        fulltext: fulltext,
        author: author,
        authoremail: authoremail,
        source: source,
        sourceurl: sourceurl
    });

    newPost.save(function(err) {
      if (err) {
          res.render('posts/add-post', { post: newPost, errors: err.errors });
          console.log(err);
      } else {
          res.redirect('/');
          console.log('Post saved successfully!');
      }

    });
};