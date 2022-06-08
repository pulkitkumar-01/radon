const bookModel= require("../models/bookModel")
const authorModel = require("../models/authorModel")


const createBook = async function (req,res) {
    const book = req.body
    const saveData = await bookModel.create(book)
    res.send ({ msg : saveData})
}

const allBooks = async function(req, res) {
    const data = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = data[0].author_id
    const booksName = await bookModel.find({author_id: id}).select({name:1})
    res.send( {msg:booksName})
}

const updatedPrice = async function (req, res) {
    const bookDetails = await bookModel.find({name:"Two states"})
    const id = bookDetails[0].author_id
    const authorName = await authorModel.find({author_id:id}).select({author_name:1, _id:0})

    const bookName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name:bookName}, {price:100},{new:true}).select({price:1, _id:0})

    res.send({msg:authorName.author_name, updatedPrice})

}



module.exports.createBook = createBook
module.exports.allBooks = allBooks
module.exports.updatedPrice = updatedPrice

