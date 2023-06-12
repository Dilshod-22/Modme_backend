const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    username:String,
    lastName:String,
    level:String,
    image:String,
    password:String,
    email:String,
    createDate:String,
    salary:Number,
    groups:[
        {
            name:String,
            count:Number,
            groupId:String
        }
    ]
})

module.exports = mongoose.model('Teachers',Schema)