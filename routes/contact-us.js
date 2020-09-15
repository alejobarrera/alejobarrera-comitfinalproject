var express = require('express');
var contactController = require('../controllers/contacts');
var router = express.Router();

router 
  .route('/')
  .get(contactController.AddItem)
  .post(contactController.CreateItem)

router 
  .route('/table-contacts')
  .get(contactController.AdminItems)

router
  .route('/contact/:id')
  .get(contactController.ShowItem)
  .delete(contactController.DeleteItem)

router
  .route('/contact/:id/edit')
  .get(contactController.EditItem)
  .put(contactController.UpdateItem)

module.exports = router;