const express = require('express');

const lodash = require('lodash')

const router = express.Router();


// GET API ASSIGNMENT ONLY

router.get('/hello', function (req, res) {
    let i = ['January','February', 'March', 'April', 'May','June', 'July', 'August', 'September', 'October', 'November', 'December']
    console.log(lodash.chunk(i,3))

    let a = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
     console.log(lodash.tail(a))

     let b = lodash.union([1,2], [2,3], [4,5,6], [6,7], [7,8,9,10])
      
     console.log(b)

     const pair = [["horror", "The Shining"], 
     ["drama","Titanic"],
     ["thriller","Shutter Island"],
     ["fantasy","Pans Labyrinth"]]

     let object = lodash.fromPairs(pair)

     console.log(object)

       res.send('Hello there!, This is lodash package')
});


router.get('/movies', function (req, res) {

    let movie = ["Stranger Things", "Inception", "Tenet", "Tumbaad", "KGF"]
    res.send(movie)
});

router.get('/movies/:indexNumber', function (req, res) {

    let movie = ["Stranger Things", "Inception", "Tenet", "Tumbaad", "KGF"]
    res.send(movie[req.params.indexNumber] || "Please use valid index")
});

router.get('/films', function (req, res) {

    let movie = [
        {
            "id": 1,
            "name": "Stranger Things"
        }, {
            "id": 2,
            "name": "Inception"
        }, {
            "id": 3,
            "name": "Tenet"
        }, {
            "id": 4,
            "name":  "Tumbaad"
        }, {
            "id": 5,
            "name":  "KGF"
        } ]
        
    res.send(movie)
});

router.get('/films/:filmid', function (req, res) {

    let movie = [
        {
            "id": 1,
            "name": "Stranger Things"
        }, {
            "id": 2,
            "name": "Inception"
        }, {
            "id": 3,
            "name": "Tenet"
        }, {
            "id": 4,
            "name":  "Tumbaad"
        }, {
            "id": 5,
            "name":  "KGF"
        } ]
        
    res.send(movie.find(ele => ele.id == req.params.filmid) || "No movie exists with this id")
});


module.exports = router;
// adding this comment for no reason