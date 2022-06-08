const express = require('express');
const router = express.Router();
const authorController = require("../controllers/authorController")
const bookController= require("../controllers/bookController")




router.post("/createBook", bookController.createBook )
router.post("/createNewAuthor", authorController.createNewAuthor  )
router.get("/allBooks", bookController.allBooks)
router.get("/updatedPrice", bookController.updatedPrice)


module.exports = router;