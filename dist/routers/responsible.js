import express from "express";
import { allResponsible, contResponsible } from "../comtrollers/responsibleController.js";
import { insertResponsible, deletResponsible } from "../comtrollers/responsibleController.js";
import { authorization } from "../middlewares/validations.js";
var responsible = express.Router();
responsible.post("/responsible/:id", authorization, insertResponsible);
responsible.get("/responsiblecont", contResponsible);
responsible.get("/responsible", allResponsible);
responsible["delete"]("/responsible/:id", authorization, deletResponsible);
export default responsible;
