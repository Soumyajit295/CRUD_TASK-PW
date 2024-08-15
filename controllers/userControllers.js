const user = require('../models/userModels.js')

exports.home = (req,res)=>{
    res.send("Hello")
}

exports.register = async(req,res)=>{

    try{

        const {name,email,password} = req.body

        if(!name || !email || !password){
            throw new Error(`Fill the required field`)
        }

        const userExists = await user.findOne({email})

        if(userExists){
            throw new Error('User already exists')
        }

        const databaseResult = await user.create({name,email,password})
        res.status(200).json({
            success : true,
            message : "User Registered successfully",
            user : databaseResult
        })
    }
    catch(err){
        console.log("Error : ",err.message)
        res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

exports.login = async(req,res)=>{
    try{
        const {email,password} = req.body

        const userExists = await user.findOne({email})

        if(!userExists){
            throw new Error(`Please signup first`)
        }
        else{
            res.status(200).json({
                sucess : true,
                message : "User Login successfully"
            })
        }
    }
    catch(err){
        console.log("Error : ",err.message)
        res.status(400).json({
            success : false,
            message : err.message
        })
    }
}

