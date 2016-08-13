var mongoose = require('mongoose');

var UrlSchema = mongoose.Schema({
    inputURL: String,
    generatedURL: String
})

var Url = module.exports = mongoose.model('Url', UrlSchema);

module.exports.createURL = function(newUrl, callback) {
    newUrl.generatedURL = createShortUrl();
    newUrl.save(callback);
}

function makeId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function createShortUrl() {
    short_url = makeId();
    string_form = "shorturl/" + short_url.toString();
    return string_form;
}
