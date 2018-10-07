var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('./Users/index', { page: 'Users', menuId: 'users' });
});

module.exports = router;
