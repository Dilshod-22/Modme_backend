const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    username:String,
    level:String,
    createDate:String,
    salary:Number,
    subject:String
})

module.exports = mongoose.model('Teachers',Schema)