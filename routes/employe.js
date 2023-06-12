const route = require("express").Router()
const Teacher = require('../model/teachers')

route.get("/getAllEmploye",async(req,res)=>{
    try{
        const user = await Teacher.find()
        res.json()    
    }catch(Err){
        throw new Err(Err)
    }
})

route.post("/regitration",async(req,res)=>{
    try{
        const {username,phoneNumber,subject,level,salary} = req.body
        const newTeacher = new Teacher ({
            username:username,
            phoneNumber:phoneNumber,
            level:level,
            subject:subject,
            salary:salary
        })
        let newUser = await newTeacher.save()
        res.json(newUser)
    }catch(err){
        throw new Error(err)
    }
})

route.put("/:id",async(req,res)=>{
    try{
        const {username,phoneNumber,subject,level,salary} = req.body
        const user = await Teacher.findByIdAndUpdate(req.params.id,{
            username:username,
            phoneNumber:phoneNumber,
            level:level,
            subject:subject,
            salary:salary
        })
        await user.save()
        res.json(user)
    }catch(err){
        throw new Error(err)
    }
})

route.delete("/:id",async(req,res)=>{
     try{
        const user = await Teacher.findByIdAndDelete(req.params.id)
        res.json(user)
    }catch(err){
        throw new Error(err)
    }

})

module.exports = route