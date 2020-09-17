//Database: finalproject
//Collection: Aboutus
var express = require('express');
var aboutusController = require('../controllers/aboutus');
var router = express.Router();
//Show all fields saved on the database
router 
  .route('/')
  .get(aboutusController.ShowItems)
//Show a form to add about us and save them on the database
router
  .route('/add-aboutus')
  .get(aboutusController.AddItem)
  .post(aboutusController.CreateItem)
//Show a table with the items saved on the database for admin purposes
  router 
  .route('/table-aboutus')
  .get(aboutusController.AdminItems)
//Show full text for any user and option to delete for admin purposes
router
  .route('/:id')
  .delete(aboutusController.DeleteItem)
//Show a form to edit the information and update it on the database for admin purposes
router
  .route('/:id/edit')
  .get(aboutusController.EditItem)
  .put(aboutusController.UpdateItem)

module.exports = router;