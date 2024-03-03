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
        applicants: ["dummy"]
    },
];
/**
 * id
 * jobcategory
 * jobdesignation
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
        jobs.push({
            id: generateUniqueId(),
            ...jobsdetails
        })
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
}
export default Jobs;