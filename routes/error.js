var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('error', { page: 'Error', menuId: 'error' });
});

router.get('/404', function (req, res, next) {
	res.render('error', { page: '404', menuId: 'error' });
});

router.get('/403', function (req, res, next) {
	res.render('error', { page: '403', menuId: 'error' });
});

module.exports = router;
