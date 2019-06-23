var express = require('express');
var router = express.Router();
const array =  ['dad\n', 'mom\n', 'racecar\n']

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({palindrome: array});
});

module.exports = router;
