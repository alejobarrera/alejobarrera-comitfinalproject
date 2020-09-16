//Database: finalproject
//Collection: courses
var express = require('express');
var coursesController = require('../controllers/courses');
var router = express.Router();
//Show a list of items saved on the database
router 
  .route('/')
  .get(coursesController.listItems)
//Show a form to add courses and save them on the database
router
  .route('/add-course')
  .get(coursesController.AddItem)
  .post(coursesController.CreateItem)
//Show a table with the items saved on the database for admin purposes
  router 
  .route('/table-courses')
  .get(coursesController.AdminItems)
//Show full text for any user and option to delete for admin purposes
router
  .route('/course/:id')
  .get(coursesController.ShowItem)
  .delete(coursesController.DeleteItem)
//Show a form to edit the information and update it on the database for admin purposes
router
  .route('/course/:id/edit')
  .get(coursesController.EditItem)
  .put(coursesController.UpdateItem)


  router
  .route('/categories')
  .get(coursesController.categories)
  .post(coursesController.CreateCategory)
  .get(coursesController.listCategories)



module.exports = router;