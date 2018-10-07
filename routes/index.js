var express = require('express');
var router = express.Router();

/* GET home page. */

var loginFake = function (request, response, next) {
	if (request.query.id)
		next();
	else
		response.sendStatus(403).end();
}

router.get('/', function (req, res, next) {
	//title: 'Example Node Express'
	res.render('index', { page: 'Home', menuId: 'home' });
});

router.get('/post', loginFake, function (req, res, next) {
	res.send({
		"user": "daniel"
	});
	//res.send(req.query.id);
});

router.post('/post/add', function (req, res, next) {
	//res.render('index', { title: 'Post list' });
	res.send(req.body);
});

module.exports = router;
