const mongoose = require('mongoose')

const connectToDb = async(req,res)=>{
    try{
       const conn = await mongoose.connect(process.env.MONGO_URL)
       console.log(`Database connected : ${conn.connection.host}`)
    }
    catch(err){
        console.log(`Database connection failed : ${err.message}`)
    }
}

module.exports = connectToDb