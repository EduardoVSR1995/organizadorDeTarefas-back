import express from "express";
import user from "./routers/user.js"

const comanders = express();

comanders.use(user)

export default comanders;