var express = require('express');
var router = express.Router();

router.get('/hard', function(req, res, next) {
    res.render('hard', { title: 'Cells: Inversion'});
});

module.exports = router;