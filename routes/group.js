const route = require('express').Router()
const Group = require("../model/group")

route.get("/getAllGroup",async(req,res)=>{
    try{
        const group = await Group.find()
        res.json(group)    
    }catch(err){
        throw new Error(err)
    }
})


route.post("/AddGroup",async(res,res)=>{
    try{
        const {TeacherName,groupName} = req.body
        const newGroup = new Group({
            TeacherName:TeacherName,
            groupName:groupName
        })
        await newGroup.save()
    }catch(err){
        throw new Error(err)
    }
})


route.delete("/deleteGroup/:id",async(req,res)=>{
    try{
        const {id} = req.params.id
        const deleteGroup = await Group.findByIdAndDelete(id)
        res.json(deleteGroup)
    }catch(err){
        throw new Error(err)
    }
})



module.exports = route