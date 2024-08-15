const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Name is required"],
        maxLength : [50,"Name should be less then 50 char"],
        trim : true
    },
    email : {
        type : String,
        required : [true,"Email is required"],
        unique : true,
    },
    password : {
        type : String,
        required : [true,"Password is required"]
    }
})

module.exports = mongoose.model('User',userSchema)