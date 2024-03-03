import JobsModel from "./jobs.model.js";
const Users = [{
    id: 2,
    name: "test",
    email: "test@gmail.com",
    password: "1234"
}];
function idGen() {
    return Math.floor(Math.random() * 1000000000).toString(36) + Date.now().toString(36);
}
class Recruiter {
    static getAllUsers() {
        return Users;
    }
    static addUser(name, email, password) {
        Users.push({
            "id": idGen(),
            "name": name,
            "email": email,
            "password": password
        });
    }
    static validateUser(email, password) {
        const result = Users.find((user) => (user.email == email && user.password == password));
        return result;
    }

};
export class Applicant {
    static makeApplicantObj(name, email, contact, resumePath) {
        return {
            "id": idGen(),
            "name": name,
            "email": email,
            "contact": contact,
            "resumepath": resumePath
        };
    }
}
export default Recruiter;