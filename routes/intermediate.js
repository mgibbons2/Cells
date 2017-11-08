var express = require('express');
var router = express.Router();

router.get('/intermediate', function(req, res, next) {
    res.render('intermediate', { title: 'Cells: Inversion'});
});

module.exports = router;