var express = require('express');
var router = express.Router();
var Url = require('../models/url');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/', function(req, res, next) {
    var inputURL = req.body.inputURL;

    var newUrl = new Url({
        inputURL: inputURL
    });
    Url.createURL(newUrl, function(err, url) {
        console.log('creating url:',url);
        if (err) {
            throw err;
        } else {
            res.redirect('/view/' + url._id);
        }
    });
});

router.get('/view/:_id', function(req, res, next) {
  Url.findById({
      _id: req.params._id
  }, function(err, url) {
      if (err) {
          console.log(err)
      }
      res.render('view',{
          url: url
      });
  });
});

module.exports = router;
