var mongoose = require('mongoose');

var UrlSchema = mongoose.Schema({
  inputURL: String,
  generatedURL: String
})

var Url = module.exports = mongoose.model('Url', UrlSchema);

module.exports.createURL = function(newURL, callback) {
  newUrl.generatedURL = createShortUrl(makeId());
  newUrl.save(callback);
}

module.exports.makeId = function() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for( var i=0; i < 5; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

module.exports.createShortUrl = function(text) {
  string_form = "shorturl/"+text.toString();
}
