const express = require('express')
const {home, register, login} = require('../controllers/userControllers.js')

const router = express.Router()

router.get('/',home)
router.post('/register',register)
router.get('/login',login)

module.exports = router