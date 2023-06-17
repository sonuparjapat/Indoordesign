const express=require("express")
const { userModel } = require("../Models/UserModel")

const userPostRouter=express.Router()


userPostRouter.post("/addtask",async(req,res)=>{

    const {task,description,date}=req.body

    try{
        const data=new user

    }catch(err){
        res.status(400).json({msg:"something going wrong"})
    }
})