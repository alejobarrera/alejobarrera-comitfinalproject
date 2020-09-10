var express = require('express');
var servicesController = require('../controllers/services');
var router = express.Router();

router 
  .route('/')
  .get(servicesController.list)

router
  .route('/add-service')
  .get(servicesController.addForm)
  .post(servicesController.Create)

  router 
  .route('/table-services')
  .get(servicesController.table)

router
  .route('/:id')
  .get(servicesController.fulltext)

module.exports = router;