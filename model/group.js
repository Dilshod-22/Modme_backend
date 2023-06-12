const mongoose = require("mongoose")
const Schema = new mongoose.Schema({
    name:String,
    teacher:String,
    users:[
        {
            username:String,
            userId:String
        }
    ]
})
module.export = mongoose.model("Group",Schema)