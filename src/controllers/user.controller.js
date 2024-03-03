import RecruiterModel, { Applicant } from "../models/user.model.js";
import JobModel from "../models/jobs.model.js";
import { application } from "express";
class Recruiter {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * have to render the lading page 
     * but consequently if already logged in different screen should be there
     */
    getLogin(req, res) {
        res.render("login.ejs");
    }
    /* 
            * first task is to get email and password from the body
            * second is to check that whether it is in the data or not
            * if in data process and make necessary changes
            * render the home page again, because nothing is given in task, what to do
         */
    postLogin(req, res) {
        const { email, password } = req.body;
        const result = RecruiterModel.validateUser(email, password);
        if (!result) {
            return res.render("fourzerofour.ejs", { errorMessage: "user not found pls register" });
        }
        req.session.userdata = { email: email, name: result.name };
        res.redirect("/jobs");
    }
    /**
     * 
     * @param {*} req get name email password
     * @param {*} res 
     * insert the name, email, password in in-memory ds for future use
     */
    postRegister(req, res) {
        console.log(req.body);
        const { name, email, password } = req.body;
        RecruiterModel.addUser(name, email, password);
        res.redirect("/login");
    }
    logout(req, res) {
        req.session.destroy();
        res.redirect("/login");
    }
};
export class ApplicantController {
    getApplicants(req, res) {
        const jobId = req.params.id;
        // console.log(jobId);
        const applicantsDetails = JobModel.getJobApplicantsById(jobId).applicants;
        // console.log(applicants);
        // res.send("success");
        res.render("applicants.ejs", { name: req.session.userdata?.name, applicants: applicantsDetails });

    }
}
export { Recruiter };