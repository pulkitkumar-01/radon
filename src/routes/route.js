const express = require('express');
const router = express.Router();
const bookModel = require('../models/bookModel')


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook", async function (req, res) {     
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ msg : saveData })
})

router.get("/booklist", async function (req, res) {      

    let getlist = await bookModel.find().select( { bookName: 1, authorName:1, _id: 0} )
    res.send({ msg : getlist })
})

router.post("/getBooksInYear", async function (req, res) {     
    let year = req.body.year
    let getallBooks = await bookModel.find( {year:{ $eq: year}}).count()
    
    res.send({ msg : getallBooks })

})

router.post("/getParticularBooks", async function (req, res) {      
    let data = req.body
    let getParticularBook = await bookModel.find(data)
    
    res.send({ msg : getParticularBook })

})


router.get("/getXINRBooks", async function (req, res) {
    let returnBooks = await bookModel.find( { $or:
        [ {"prices.indianPrice": { $eq: "200INR"}},
          {"prices.indianPrice": { $eq: "500INR"}},
          {"prices.indianPrice": { $eq: "100INR"}} 
        ]})
    res.send( { msg : returnBooks})

})


router.get("/getRandomBooks", async function (req, res) {
        let returnStock = await bookModel.find( { $or:
            [ {stockAvailable:true},
              {totalPages: { $gt: 500}}
            ]})
            
        res.send({ msg : returnStock })
 })



module.exports = router