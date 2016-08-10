var express = require('express');
var router = express.Router();
var Url = require('../models/url');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', {
        title: 'URL Shortner'
    });
});

router.post('/', function(req, res, next) {
            var url_input = req.body.url_input;
            if (errors) {
                res.render('index', {
                    errors: errors
                });
            } else {
                var newUrl = new Url({
                    url_input: url_input
                });
            }
            Url.createURL(newUrl, function(err, url) {
                if (err) {
                    throw err;
                } else {
                    res.redirect('/');
                }
            });
          });



            module.exports = router;
