var express = require('express');
var contactController = require('../controllers/contact');
var router = express.Router();

router 
  .route('/contact-us')
  .get(contactController.contactForm)
  .post(contactController.contactCreate)

module.exports = router;