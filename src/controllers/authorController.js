const AuthorModel= require("../models/authorModel")

const createNewAuthor= async function (req, res) {
    let author = req.body
    let authornew = await AuthorModel.create(author)
    res.send({data: authornew})
}




// // const getAuthorsData= async function (req, res) {
//     let authors = await AuthorModel.find()
//     res.send({data: authors})
// }

module.exports.createNewAuthor= createNewAuthor
//module.exports.getAuthorsData= getAuthorsData