var express = require('express');
var router = express.Router();
var structure = require('./structure.js');
/* GET home page. */
router.get('/', function(req, res, next) {
        res.render(structure.mainPage);
});

module.exports = router;
