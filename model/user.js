const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    username:String,
    lastname:String,
    password:String,
    email:String,
    image:String,
    age:Number,
    location:String,
    role:String,
    learnSubject:[{
        name:String,
        subjectID:String,
    }],
    lastPayTime:String,
    createDate:String
})

module.exports = mongoose.model("User",Schema)