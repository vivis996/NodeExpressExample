var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.render('error', { page: '500', menuId: 'error', message: 'Error interno' });
});

router.get('/404', function (req, res, next) {
	res.render('error', { page: '404', menuId: 'error', message: 'Página no encontrada' });
});

router.get('/403', function (req, res, next) {
	res.render('error', { page: '403', menuId: 'error', message: 'Acceso no permitido' });
});

module.exports = router;
