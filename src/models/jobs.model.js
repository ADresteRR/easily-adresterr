function generateUniqueId() {
    return Math.floor(Math.random() * 1000000000).toString(36) + Date.now().toString(36);
}
const jobs = [
    {
        id: 1,
        jobcategory: "IT/SOFTWARE",
        jobdesignation: "SDE",
        joblocation: "Mumbai",
        companyname: "Amazon",
        salary: "45LPA",
        applyby: "19/12/2024",
        skillsrequired: ["Java", "Python"],
        numberofopening: 10,
        jobposted: "19/12/2023",
        applicants: []
    },
];
/**
 * id
 * jobcategory
 * jobdesignation
 * 
 * joblocation
 * companyname
 * salary
 * applyby
 * skillrequired
 * number of opening
 * jobposted
 * applicants
 */

/**
 * Applicant attribute
 * id
 * name
 * email
 * contact
 * resumepath 
 */
class Jobs {
    static getAllJobs() {
        return jobs;
    }

    // during job creation applicants list is empty anyways
    static addJob(jobsdetails) {
        const { jobcategory, jobdesignation, joblocation, companyname, applyby, salary, skillsrequired, numberofopenings } = jobsdetails;
        const skills = [skillsrequired];
        console.log("checking ", skills);
        const newJob = {
            id: generateUniqueId(), // Assign a unique ID
            jobcategory: jobcategory,
            jobdesignation: jobdesignation,
            joblocation: joblocation,
            companyname: companyname,
            salary: salary,
            applyby: applyby,
            skillsrequired: skills,
            numberofopening: numberofopenings,
            jobposted: (new Date()).toLocaleString(),
            applicants: [],
        };
        jobs.push(
            newJob
        )
        console.log(jobs);
        return;
    }
    static getJobById(id) {
        const result = jobs.find((job) => job.id == id)
        return result;
    }
    static addApplicantById(id, applicantObj) {
        const idx = jobs.findIndex(job => job.id == id);
        jobs[idx].applicants.push(applicantObj);
        console.log(jobs);
        return;
    }
    static getJobApplicantsById(id) {
        const result = jobs.find(job => job.id == id);
        console.log(result);
        return result;
    }
    static deleteById(jobId) {
        const idx = jobs.findIndex(job => job.id == jobId);
        jobs.splice(idx, 1);
        return;

    }
    static update(jobid, jobDetailUpdate) {
        const idx = jobs.findIndex(job => job.id == jobid);
        const { jobcategory, jobdesignation, joblocation, companyname, applyby, salary, skillsrequired, numberofopenings } = jobDetailUpdate;
        const skills = [skillsrequired];
        console.log("checking ", skills);
        const newJob = {
            id: jobid, // Assign a unique ID
            jobcategory: jobcategory,
            jobdesignation: jobdesignation,
            joblocation: joblocation,
            companyname: companyname,
            salary: salary,
            applyby: applyby,
            skillsrequired: skills,
            numberofopening: numberofopenings,
            jobpostedate: jobs[idx].jobposted,
            applicants: jobs[idx].applicants,
        };
        jobs[idx] = newJob;
        console.log(jobs[idx]);
    }
    static getByCompanyName(companyName) {
        const result = jobs.find(job => job.companyname == companyName);
        return result;
    }
}
export default Jobs;