var express = require('express');
var coursesController = require('../controllers/courses');
var router = express.Router();

router 
  .route('/')
  .get(coursesController.list)

router
  .route('/add-course')
  .get(coursesController.addForm)
  .post(coursesController.Create)

  router 
  .route('/table-courses')
  .get(coursesController.table)

  router
  .route('/categories')
  .get(coursesController.categories)
  .post(coursesController.CreateCategory)
  .get(coursesController.listCategories)

router
  .route('/:id')
  .get(coursesController.fulltext)

module.exports = router;