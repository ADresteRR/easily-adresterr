import RecruiterModel from "../models/recruiter.model.js";
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
            return res.status(404).send("invalid credential");
        }
        req.session.userdata = { email: email };
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
};

export { Recruiter };