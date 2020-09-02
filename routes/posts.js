var express = require('express');
var postsController = require('../controllers/posts');
var router = express.Router();

router 
  .route('/')
  .get(postsController.list)

router
  .route('/add-post')
  .get(postsController.addpostForm)
  .post(postsController.postCreate)

  router 
  .route('/table-posts')
  .get(postsController.table)

router
  .route('/:id')
  .get(postsController.fulltext)

module.exports = router;