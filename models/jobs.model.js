const jobs = [
    {
        id: 1,
        jobcategory: "IT/SOFTWARE",
        jobdesignation: "SDE",
        joblocation: "Mumbai",
        companyname: "Amazon",
        salary: "45LPA",
        applyby: "19/12/2024",
        skillrequired: ["Java", "Python"],
        numberofopening: 10,
        jobposted: "19/12/2023",
        applicants: []
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
            id: jobs.length + 1,
            ...jobsdetails
        })
    }
}
export default Jobs;