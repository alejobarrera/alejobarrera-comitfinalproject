var express = require('express');
var faqController = require('../controllers/faqs');
var router = express.Router();

router 
  .route('/admin/add-faq')
  .get(faqController.addfaqForm)
  .post(faqController.faqCreate)

module.exports = router;