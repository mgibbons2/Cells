var express = require('express');
var router = express.Router();

router.get('/difficulty', function(req, res, next) {
    res.render('difficulty', { title: 'Cells: Inversion'});
});

module.exports = router;