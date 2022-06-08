const authorModel= require("../models/authorModel")


let createNewAuthor = async function (req,res) {
    let reqAuthor = req.body
    let authorId = req.author_id
    if(!authorId) return res.send({msg :"Author id is compulsory"})
    let SavedData = await authorModel.create(reqAuthor)
    res.send( {msg : SavedData})
}



module.exports.createNewAuthor = createNewAuthor