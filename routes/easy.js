var express = require('express');
var router = express.Router();

router.get('/easy', function(req, res, next) {
    res.render('easy', { title: 'Cells: Inversion'});
});

module.exports = router;