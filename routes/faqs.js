//Database: finalproject
//Collection: faqs
var express = require('express');
var faqsController = require('../controllers/faqs');
var router = express.Router();
//Show a list of items saved on the database
router 
  .route('/')
  .get(faqsController.listItems)
//Show a form to add faqs and save them on the database
router
  .route('/add-faq')
  .get(faqsController.AddItem)
  .post(faqsController.CreateItem)
//Show a table with the items saved on the database for admin purposes
  router 
  .route('/table-faqs')
  .get(faqsController.AdminItems)
//Show delete option for admin purposes
router
  .route('/faq/:id')
  .delete(faqsController.DeleteItem)
//Show a form to edit the information and update it on the database for admin purposes
router
  .route('/faq/:id/edit')
  .get(faqsController.EditItem)
  .put(faqsController.UpdateItem)

module.exports = router;