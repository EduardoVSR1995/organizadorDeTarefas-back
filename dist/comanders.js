import express from "express";
import user from "./routers/user.js";
import assignment from "./routers/assignment.js";
import responsible from "./routers/responsible.js";
var comanders = express();
comanders.use(user);
comanders.use(assignment);
comanders.use(responsible);
export default comanders;
