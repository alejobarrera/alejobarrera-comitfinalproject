var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('contact/admin-list-contact', { title: 'List of contacts' });
});

module.exports = router;