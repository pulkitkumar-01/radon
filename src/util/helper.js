function printDate(){
    const date = new Date
    console.log("Date is", date.getDate())

}

module.exports.pqr = printDate


function printMonth(){
    const date = new Date
    console.log("Month is", date.getMonth()+1)

}

module.exports.xyz = printMonth


function getBatchInfo() {
    
    console.log("Radon, Week3 Day 4, the topic for today is Nodejs module system.")

}


module.exports.mno = getBatchInfo
