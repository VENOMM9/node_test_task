const express = require("express");
const controller = require("../controllers/controller")

const middlewear = require("../middlewear/middlewear")



const userRouter = express.Router();

userRouter.get("/users/:id",  controller.getUser)
userRouter.post("/login", middlewear.validateLogin, controller.login)





module.exports = userRouter




  
  