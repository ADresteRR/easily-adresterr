import express from "express";
import ejsLayout from "express-ejs-layouts"
import session from "express-session";
import { Recruiter } from "./controllers/user.controller.js";
import JobController from "./controllers/job.contoller.js";
import path from "path";
import authLogin, { authLogout } from "./middlewares/auth.middleware.js";
import multer from "multer";
import fileUpload from "./middlewares/file.middleware.js";
const server = express();
// global middlewares
const upload = fileUpload;
server.use(express.static(path.join(path.resolve(), "public")));
server.set("view engine", "ejs");
server.set("views", "./views");
server.use(express.urlencoded({ extended: true }));
server.use(ejsLayout);
server.use(session({
    secret: "this is secret key",
    saveUninitialized: false,
    resave: false,
    cookie: { secure: false }
}));

// initializing 
const RecruiterController = new Recruiter();
const jobController = new JobController();

// routes
server.get("/", (req, res) => {
    res.render("landingPage.ejs", { name: req.session.userdata?.name });
});
server.get("/login", RecruiterController.getLogin);
server.post("/login", RecruiterController.postLogin);
server.get("/logout", authLogout, RecruiterController.logout);
server.post("/register", RecruiterController.postRegister);

server.get("/jobs", jobController.getJobs)
server.get("/job/:id", jobController.getJobDetails);
server.get("/postjob", authLogin, jobController.getpostjob);
server.post("/job", authLogin, jobController.postjob);


server.post("/apply/:id", upload.single('resume'), jobController.applyJobById);
export default server;