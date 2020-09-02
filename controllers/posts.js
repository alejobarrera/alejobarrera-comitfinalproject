var express = require('express');
var Post = require('../models/post');

exports.list = function(req, res) {
    Post.find(function (err, posts) {
        if (err) console.log(err)
        
        console.log(posts)
        res.render('posts/list', { title: 'News', posts: posts });
    });
};

exports.addpostForm = function(req, res) {
    res.render('posts/add-post', { title: 'New post', post: {}, errors: [] });
};

exports.table = function(req, res) {
    Post.find(function (err, posts) {
        if (err) console.log(err)
        
        console.log(posts)
        res.render('posts/table-post', { title: 'All posts', posts: posts });
    });
};

exports.fulltext = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Post.findById(id, function (err, post) {
        if (err) console.log(err)
        
        console.log(post)
        res.render('posts/fulltext', { title: 'Fulltext', post: post });
    });
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
          res.redirect('table-posts');
          console.log('Post saved successfully!');
      }

    });
};