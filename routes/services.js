//Database: finalproject
//Collection: services
var express = require('express');
var servicesController = require('../controllers/services');
var router = express.Router();
//Show a list of items saved on the database
router 
  .route('/')
  .get(servicesController.listItems)
//Show a form to add services and save them on the database
router
  .route('/add-service')
  .get(servicesController.AddItem)
  .post(servicesController.CreateItem)
//Show a table with the items saved on the database for admin purposes
router 
  .route('/table-services')
  .get(servicesController.AdminItems)
//Show full text for any user and option to delete for admin purposes
router
  .route('/service/:id')
  .get(servicesController.ShowItem)
  .delete(servicesController.DeleteItem)
//Show a form to edit the information and update it on the database for admin purposes
router
  .route('/service/:id/edit')
  .get(servicesController.EditItem)
  .put(servicesController.UpdateItem)

module.exports = router;