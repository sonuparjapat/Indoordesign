const express=require("express")
const cors=require("cors")
const { connection } = require("./Models/UserModel")
const { userRouter } = require("./Controls/UserRoute")
const app=express()

app.use(cors())
app.use(express.json())
app.use("/user",userRouter)



app.listen(8080,async()=>{
    try{
await connection
console.log("connected to mongodb")

    }catch(err){
        console.log(err)
    }
    console.log("server is running")
})