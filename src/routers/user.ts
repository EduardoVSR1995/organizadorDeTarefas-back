import express from "express";
import {creatUservalid} from '../middlewares/validations.js'
import { insertUser } from "../comtrollers/userController.js";
const user = express.Router();

user.post("/creatuser", creatUservalid , insertUser  )

export default user;