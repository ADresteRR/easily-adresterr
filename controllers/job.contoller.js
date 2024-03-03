import JobModel from "../models/jobs.model.js";
class JobController {
    getJobs(req, res) {
        console.log(req.session.userdata?.name);
        res.render("jobs.ejs", { jobs: JobModel.getAllJobs(), name: req.session.userdata?.name });
    }
};
export default JobController;