import JobModel from "../models/jobs.model.js";
import { Applicant } from "../models/user.model.js";
import path from "path";
class JobController {
    getJobs(req, res) {
        console.log(req.session.userdata?.name);
        res.render("jobs.ejs", { jobs: JobModel.getAllJobs(), name: req.session.userdata?.name });
    }
    getpostjob(req, res) {
        res.render("postjob.ejs", { name: req.session.userdata?.name })
    }
    /**
     * 
     * @param {*} req would have all the attribute of the jobs 
     * @param {*} res 
     * have to add jobs in the list
     */
    postjob(req, res) {
        console.log(req.body);
        JobModel.addJob(req.body);
        res.redirect("/jobs");
    }
    getJobDetails(req, res) {
        const id = req.params.id;
        const jobDetails = JobModel.getJobById(id);
        res.render("jobdetails.ejs", { job: jobDetails, name: req.session.userdata?.name });
    }
    /**
     * 
     * @param {*} req email and contact and resume
     * @param {*} res 
     */
    applyJobById(req, res) {
        const id = req.params.id;
        const { name, email, contact } = req.body;
        const resumePath = req.file.path;
        console.log("resume path : ", resumePath);
        // console.log(id, email, contact, resumePath);
        const applicantObject = Applicant.makeApplicantObj(name, email, contact, resumePath);
        JobModel.addApplicantById(id, applicantObject);
        res.redirect("/jobs");
    }
    deletejob(req, res) {
        const jobid = req.params.id;
        JobModel.deleteById(jobid);
        res.redirect("/jobs");

    }
    putUpdate(req, res) {
        const jobid = req.params.id;
        JobModel.update(jobid, req.body);
        res.redirect("/jobs");

    }
    getUpdate(req, res) {
        const jobid = req.params.id;
        const jobDetails = JobModel.getJobById(jobid);
        res.render("updatedetails.ejs", { name: req.session.userdata?.name, job: jobDetails });
    }
};
export default JobController;