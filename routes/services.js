var express = require('express');
var servicesController = require('../controllers/services');
var router = express.Router();
//Show a list of items saved on the database on the collection service
router 
  .route('/')
  .get(servicesController.listItems)
//Show a form to add services on the database on the collection service
router
  .route('/add-service')
  .get(servicesController.AddItem)
  .post(servicesController.CreateItem)
//Show a table with the items saved on the database on the collection service
  router 
  .route('/table-services')
  .get(servicesController.AdminItems)
//Show fulltext and option to delete 
  router
  .route('/service/:id')
  .get(servicesController.ShowItem)
  .delete(servicesController.DeleteItem)
//Show a form to edit services and update the information on the database on the collection service
router
  .route('/service/:id/edit')
  .get(servicesController.EditItem)
  .put(servicesController.UpdateItem)

module.exports = router;