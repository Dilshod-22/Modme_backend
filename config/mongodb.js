const mongoose = require("mongoose")

const connect = ()=>{ 
    mongoose.connect("mongodb+srv://moxirbek:dilshodbek0422@cluster0.fp1t4.mongodb.net/?retryWrites=true&w=majority")
    .then(()=>{
        console.log("connect to mongoose");
    })
    .catch((err)=>{
        throw new Error(err)
    })
}
module.exports = connect