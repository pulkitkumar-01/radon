const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const createNewBook= async function (req, res) {
    let book = req.body
    let authorID= book.author
    let publisherID = book.publisher
    if(authorID) {

        let isValid1 = await authorModel.findById(authorID)
        if(isValid1) {
            if(publisherID){
                let isValid2 = await publisherModel.findById(publisherID)
                if(isValid2){
                    let bookNew = await bookModel.create(book)
                    res.send({data: bookNew})
                } else res.send(" Publisher ID is not correct")
            } else res.send(" Please enter Publisher ID")

        }else res.send(" Author ID is not correct")
    }else   res.send(" Please enter Author ID ")


}

const getBookdetails = async function (req, res) {
    let book = await bookModel.find().populate(['author', 'publisher'])
    res.send({ data : book})
}


const updateBook = async function (req, res) {
    let publisher = await publisherModel.find({ name : {$in : ["Penguin ", "Harper Collins"]}})
    let updated = await bookModel.updateMany({ publisher : publisher}, {$set : {"isHardCover": true}})

    let authors = await authorModel.find({ rating: {$gt :3.5}})
    let updated2 = await bookModel.updateMany({ author : authors}, {$inc : {price: 10}})


    res.send({ msg: [updated, updated2]})

}




// const updateBook = async function (req, res) {
//     let books = await bookModel.find().populate(['author', 'publisher'])
//     let newBook = []
//     for ( let i =0 ; i<books.length; i++ ) {
//         if(books[i].publisher.name == "Penguin" || books[i].publisher.name == "Harper Collins" ){
//         let updatedBook = await bookModel.updateOne({ name: books[i].name}, {$set : {isHardCover: true }})
//         newBook.push(updatedBook)
//     }

//     if(books[i].author.rating > 3.5){
//         let updatedBook = await bookModel.updateOne({ name: books[i].name}, {$set : {price: {$inc : 10 }}})
//         newBook.push(updatedBook)
//    }    

//}

//     res.send({ msg : newBook})

// }





module.exports.createNewBook = createNewBook
module.exports.getBookdetails = getBookdetails
module.exports.updateBook = updateBook

























// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     res.send({data: books})
// }

// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('author_id')
//     res.send({data: specificBook})



module.exports.createNewBook= createNewBook


// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
