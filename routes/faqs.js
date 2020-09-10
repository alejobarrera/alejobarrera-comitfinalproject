var express = require('express');
var faqsController = require('../controllers/faqs');
var router = express.Router();

router 
  .route('/')
  .get(faqsController.list)

router
  .route('/add-faq')
  .get(faqsController.addForm)
  .post(faqsController.faqCreate)

  router 
  .route('/table-faqs')
  .get(faqsController.table)

module.exports = router;