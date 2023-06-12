const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    username:String,
    phoneNumber:String,
    location:String,
    fatherOrMatherNumber:String,
    groups:[{
        teacherName:String,
        groupName:String,
    }],

    createDate:String
})

module.exports = mongoose.model("User",Schema)