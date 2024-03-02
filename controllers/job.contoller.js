import JobModel from "../models/jobs.model.js";
class JobController {
    getJobs(req, res) {
        res.render("jobs.ejs", { jobs: JobModel.getAllJobs() });
    }
};
export default JobController;