const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    task:String,
    description:String,
    date:String
})
const UserpostModel=mongoose.model("userposts",postSchema)
module.exports={UserpostModel}