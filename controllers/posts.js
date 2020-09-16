//Database: finalproject
//Collection: posts
var express = require('express');
var Post = require('../models/post');
var fs = require('fs');
//Show a list of items saved on the database
exports.listItems = function(req, res) {
    Post.find(function (err, posts) {
        if (err) console.log(err)
        
        console.log(posts)
        res.render('posts/list-posts', { title: 'News', posts: posts });
    });
};
//Show a form to add posts and save them on the database
exports.AddItem = function(req, res) {
    res.render('posts/add-post', { title: 'New post', post: {}, errors: [] });
};
//Save the new post on the database
exports.CreateItem = function(req, res) {
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
//Show a table with the items saved on the database for admin purposes
exports.AdminItems = function(req, res) {
    Post.find(function (err, posts) {
        if (err) console.log(err)
        
        console.log(posts)
        res.render('posts/table-posts', { title: 'All posts', posts: posts });
    });
};
//Show full text for any user and option to delete for admin purposes
exports.ShowItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Post.findById(id, function (err, post) {
        if (err) console.log(err)
        
        console.log(post)
        res.render('posts/show-post', { title: 'Fulltext', post: post });
    });
};
//Delete an item from the database
exports.DeleteItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Post.findById(id, function (err, post) {
        if (err) console.log(err)
        console.log(post)

        post.remove(function (err){
         if (err) console.log(err)
         res.redirect('/posts/table-posts')
        });        
    });
};
//Show a form to edit the information and update it on the database for admin purposes
exports.EditItem = function(req, res) {
    var id = req.params.id;

    console.log(id);
    Post.findById(id, function (err, post) {
        if (err) console.log(err)
        console.log(post)

        res.render('posts/edit-post', { 
            title: 'User zone', 
            subtitle:'Admin user here',
            sectiontitle: 'Edit item - Posts',
            post: post,
            errors: [] 
        });
    });
};
//Update the information on the database
exports.UpdateItem = function(req, res) {
    var id = req.params.id;
    var update = req.body;

    Post.findByIdAndUpdate(id, update, function (err, post) {
        if (err) console.log(err)
        console.log(post)
        res.redirect('/posts/table-posts')
    });
};