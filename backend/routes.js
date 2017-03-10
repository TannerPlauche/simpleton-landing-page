module.exports.home = function (req, res, next) {
  res.render('index', {title: 'Yes, it\'s that easy!'});
}
module.exports.data = function (req, res, next) {
  var links = {
    "Learn more": "https://github.com/newz2000/express-easy-generator",
    "npm": "https://www.npmjs.com/package/express-easy",
    "Created by newz2000": "http://www.bearfruit.org/about/"
  }
  res.json(links);
}