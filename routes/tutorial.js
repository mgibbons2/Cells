var express = require('express');
var router = express.Router();

router.get('/tutorial', function(req, res, next) {
    res.render('tutorial', { title: 'Cells: Inversion'});
});

module.exports = router;