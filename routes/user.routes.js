var express=require('express')
var userRouter=express.Router()
var controller=require('../Controller/user.contoller')
userRouter.post("/register",controller.registerUser)
userRouter.post("/login",controller.login)
userRouter.put('/updatepassword',controller.passwordupdate)
userRouter.put('/updateprofile',controller.updateProfile)
userRouter.post('/getuserbyemail',controller.getUserById)
module.exports=userRouter