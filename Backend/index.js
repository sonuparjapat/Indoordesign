const express=require("express")
const { userRouter } = require("./Controls/UserRoute")
const { connection } = require("./Models/UserModel")
const cors=require("cors")

const app=express()


app.use(cors())
app.use(express.json())
app.use("/user",userRouter)

app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to database")
    }catch(err){
        console.log(err)
    }
    console.log("server is running at port 8080")
})