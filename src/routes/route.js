const express = require('express');
const router = express.Router();

const bookcontroller = require('../controllers/bookController')




router.post("/createBook", bookcontroller.createBook)

router.get("/getBooksData", bookcontroller.getBooksData)

module.exports = router;