const express=require("express")
const { userModel } = require("../Models/UserModel")
const bcrypt = require('bcrypt');

const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {name,email,password}=req.body

const data=await userModel.findOne({"email":email})

if(data){
    res.status(400).json({msg:"Already Registered",status:"error"})
}else {
    try{
        bcrypt.hash(password,5, async(err, hash)=> {
            const data=new userModel({name,email,password:hash})
            await data.save()
            res.status(200).json({msg:"Successfully Registered",status:"success"})
        });

    }catch(err){
        res.status(400).json({msg:"Something going wrong",status:"error"})
    }
}

})
module.exports={userRouter}