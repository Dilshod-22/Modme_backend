const route = require('express').Router()
const User = require("../model/user")

route.get("/AllStudent",(req,res)=>{
    res.end()
})

route.post("/addStudent",async (req,res)=>{
    try{
        const {username,phoneNumber,groups,fatherOrMatherNumber} = req.body
        const newUser = new User({
            username:username,
            phoneNumber:phoneNumber,
            groups:groups,
            fatherOrMatherNumber:fatherOrMatherNumber
        })
        await newUser.save()
        res.json("successs").end()
    }
    catch(err){
        throw new Error(err)
    }
})


route.put("/:id",async(req,res)=>{
    try{
        const {username,phoneNumber,groups,fatherOrMatherNumber} = req.body
        const update = await User.findByIdAndUpdate(req.params.id,{
            username:username,
            phoneNumber:phoneNumber,
            groups:groups,
            fatherOrMatherNumber:fatherOrMatherNumber
        })
        await update.save()
        res.json(update)    
    }catch(err){
        throw new Error(err)
    }
})

route.delete("deleteStudent/:id",async(req,res)=>{
    try{
        const {id} = req.params
        const user = await User.findByIdAndDelete(id)
        res.json(user)
    }catch(err){
        throw new Error(err)
    }

})

module.exports = route