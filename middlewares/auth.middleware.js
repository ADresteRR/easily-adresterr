export default function authLogin(req, res, next) {
    const email = req.session.userdata?.email;
    if (!email) {
        return res.render("fourzerofour.ejs", { errorMessage: "only recruiter is allowed to access this page, login as recruiter to continue" });
    }
    next();
}