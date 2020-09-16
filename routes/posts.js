//Database: finalproject
//Collection: posts
var express = require('express');
var postsController = require('../controllers/posts');
var router = express.Router();
//Show a list of items saved on the database
router 
  .route('/')
  .get(postsController.listItems)
//Show a form to add posts and save them on the database
router
  .route('/add-post')
  .get(postsController.AddItem)
  .post(postsController.CreateItem)
//Show a table with the items saved on the database for admin purposes
  router 
  .route('/table-posts')
  .get(postsController.AdminItems)
//Show full text for any user and option to delete for admin purposes
router
  .route('/post/:id')
  .get(postsController.ShowItem)
  .delete(postsController.DeleteItem)
//Show a form to edit the information and update it on the database for admin purposes
router
  .route('/post/:id/edit')
  .get(postsController.EditItem)
  .put(postsController.UpdateItem)

module.exports = router;