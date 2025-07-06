const mongoose = require("mongoose")
 const connectToDb = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URI)
        console.log("Connect to DB")
    }
    catch(err){
        console.log(err.message)
    }
 }

 module.exports = connectToDb