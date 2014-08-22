var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    // get standard header values for testing purpose
    var host = req.header('Host') || 'unknown';
    var useragent = req.header('User-Agent') || 'unknown';
    // get custom MLB header values
    var userid = req.header('X-MLBAM-WUID') || 'unknown';

    res.render('index', { title: 'Simple WUID Test App' , userid: userid, host: host, useragent: useragent});
});

module.exports = router;
