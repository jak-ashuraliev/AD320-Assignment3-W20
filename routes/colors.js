const express = require('express');
const router = express.Router();
const colorsJson = require('../data/colors.json');

//Get All Colors
router.get('/', function (req, res) {
    res.json(colorsJson);
});

//Get A Specific Color
router.get('/:id', function (req, res) {
    const colors = colorsJson.find(c => c.id === parseInt(req.params.id));    
    res.send(colors);
});

module.exports = router;
