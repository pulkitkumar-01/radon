const express = require('express');
const logger = require("../logger/logger")
const helper = require("../util/helper")
const formatter = require("../validator/formatter")

const router = express.Router();

router.get('/test-me', function (req, res) {
    logger.abc()
    helper.pqr()
    helper.xyz()
    helper.mno()
    formatter.trim("  FunctionUp  ")
    formatter.lowercase("PuLkiT")
    formatter.Uppercase("pulkit")
    res.send('My first ever api!')
});


module.exports = router;
// adding this comment for no reason