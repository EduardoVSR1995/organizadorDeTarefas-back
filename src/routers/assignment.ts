import express from "express";
import { authorization , autorizationAssignment} from '../middlewares/validations.js'
import { insertAssignment , AllAssignment, delAssignment, updatAssignment } from "../comtrollers/assignmentController.js";

const assignment = express.Router();

assignment.post("/assignment", authorization, autorizationAssignment, insertAssignment )

assignment.get("/assignment", AllAssignment )

assignment.delete("/assignment" ,authorization ,delAssignment)

assignment.patch("/assignment" ,authorization, updatAssignment)

export default assignment;