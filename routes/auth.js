//import....
const express = require('express')
const router = express.Router()
//import controller
const { register,login, currentUser } = require('../controllers/auth')

router.post('/register',register)
router.post('/login',login)
router.post('/current-user',currentUser) //เอาไว้เช็คหน้่าบ้านว่าล็อกอินแล้วหรือยัง
router.post('/current-admin',currentUser) //เอาไว้เช็คหน้่าบ้านว่าล็อกอินแล้วหรือยัง


module.exports = router