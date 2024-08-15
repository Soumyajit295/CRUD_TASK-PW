require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToDb = require('./config/db.js')
const routes = require('./routes/userRoutes.js')

const app = express()

connectToDb()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use('/',routes)


module.exports = app