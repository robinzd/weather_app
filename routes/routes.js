var express = require('express');

var router = express.Router();
router.post('/weatherapp', function(req, res) {
    require('../middleware/WeatherApp').then(function(ret) {
        ret.WeatherApp(req, res);
    });
});

module.exports = { router };
