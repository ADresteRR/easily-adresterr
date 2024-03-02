class Recruiter {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * have to render the lading page 
     * but consequently if already logged in different screen should be there
     */
    getLogin(req, res) {
        res.render("landingPage.ejs");

    }
    /* 
            * first task is to get email and password from the body
            * second is to check that whether it is in the data or not
            * if in data process and make necessary changes
            * render the home page again, because nothing is given in task, what to do
         */
    postLogin(req, res) {

    }
};

export { Recruiter };