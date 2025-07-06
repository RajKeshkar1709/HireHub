const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true,},
    password:String,
    role:{type:String,enum:['recruiter', 'jobseeker'], required: true},
    profile:{
        skills:[],
        experience:Number,
        qualification:String
    }
})

const UserModel = mongoose.model("User",userSchema)
module.exports= UserModel