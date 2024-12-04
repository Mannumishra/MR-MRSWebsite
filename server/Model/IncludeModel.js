const mongoose = require("mongoose")

const includeschema = new mongoose.Schema({
    image:{
        type:String,
        required:[true , "Include image is must required"]
    },
    includename:{
        type:String,
        required:[true,"Include name is must required"]
    }
})

const include = mongoose.model("include" , includeschema)

module.exports = include