import express from "express";
import user from "./routers/user.js"
import assignment from "./routers/assignment.js";

const comanders = express();

comanders.use(user)

comanders.use(assignment)

export default comanders;