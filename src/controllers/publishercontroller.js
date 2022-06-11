const publisherModel= require("../models/publisherModel")


const createNewPublisher= async function (req, res) {
    let publisher = req.body
    let newPublisher = await publisherModel.create(publisher)
    res.send({data: newPublisher})

};

module.exports.createNewPublisher = createNewPublisher    



