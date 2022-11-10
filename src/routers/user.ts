import express from "express";
import {creatUservalid, creatAssignmentValid, authorization } from '../middlewares/validations.js'
import { insertUser , signinUser, allUsers, deluser, updatUser } from "../comtrollers/userController.js";

const user = express.Router();

user.post("/creatuser", creatUservalid , insertUser)

user.post("/loginuser", creatAssignmentValid , signinUser)

user.get("/users" , allUsers)

user.delete("/users", authorization, deluser)

user.patch("/users", authorization, updatUser)



export default user;