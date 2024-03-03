import JobModel from "../models/jobs.model.js";
import { Applicant } from "../models/user.model.js";
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
        const { email, contact } = req.body;
        const resumePath = req.file.path;
        console.log(id, email, contact, resumePath);
        const applicantObject = Applicant.makeApplicantObj(email, contact, resumePath);
        JobModel.addApplicantById(id, applicantObject);
        res.redirect("/jobs");
    }
};
export default JobController;