var express = require('express');
var postController = require('../controllers/posts');
var router = express.Router();

router 
  .route('/admin/add-post')
  .get(postController.addpostForm)
  .post(postController.postCreate)

module.exports = router;