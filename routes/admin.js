//Database: finalproject
//Collection: Aboutus
var express = require('express');
var userController = require('../controllers/users');
var auth = require('../middlewares/auth')
var router = express.Router();
//Show all fields saved on the database
router 
  .route('/')
  .get(auth, function (req, res) {
    return res.status(401).send({message: 'You have access'})
  })

router 
  .route('/signup')
  .post(userController.signUp)

  router 
  .route('/signin')
  .post(userController.signIn)

  module.exports = router;