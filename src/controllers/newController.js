const bookModel = require("../models/bookModel")


const myCode = async function (req,res){
    
    console.log("Hello! World")
    res.send ({ msg: "You are in Hello World Pulkit"})

}    


module.exports.myCode = myCode
