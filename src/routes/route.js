const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publishercontroller = require("../controllers/publisherController")
const bookController = require("../controllers/bookController")


router.post("/createNewAuthor", authorController.createNewAuthor  )

router.post("/createNewPublisher", publishercontroller.createNewPublisher)

router.post("/createNewBook", bookController.createNewBook)

router.get("/getBookdetails", bookController.getBookdetails)

router.put("/updateBook", bookController.updateBook)




module.exports = router;