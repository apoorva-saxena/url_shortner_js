var express = require('express');
var router = express.Router();
var Url = require('../models/url');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/gen_url', function(req, res, next) {
    var newUrl = new Url({
        inputURL: req.param('inputURL')
    });
    Url.createURL(newUrl, function(err, url) {
        if (err) {
            throw err;
        } else {
          return_json = {
            'generatedURL': url.generatedURL,
            'inputURL': url.inputURL
          }
          console.log('sending to client:', return_json)
          res.send(JSON.stringify(return_json));
        }
    });
});

router.get('/:generatedURL', function(req, res, next) {
  console.log(req.params.generatedURL);
  Url.findBy
});

//
// router.get('/view/:_id', function(req, res, next) {
//     Url.findById({
//         _id: req.params._id
//     }, function(err, url) {
//         if (err) {
//             console.log(err)
//         }
//         res.render('view', {
//             url: url
//         });
//     });
// });

module.exports = router;
