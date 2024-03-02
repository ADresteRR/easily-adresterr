import express from "express";
import ejsLayout from "express-ejs-layouts"
import { Recruiter } from "./controllers/user.controller.js";
import path from "path";
const server = express();
// global middlewares
server.use(express.urlencoded({ extended: true }));
server.set("view engine", "ejs");
server.set("views", "./views");
server.use(ejsLayout);
server.use(express.static(path.join(path.resolve(), "public")));

// initializing 
const RecruiterController = new Recruiter();

// routes
server.get("/", RecruiterController.getLogin);
export default server;