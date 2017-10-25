var express = require('express');
var router = express.Router();

router.get('/game', function(req, res, next) {
    res.render('game', { title: 'Cells: Inversion'});
});

module.exports = router;