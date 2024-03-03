const Users = [{
    id: 2,
    name: "anjan",
    email: "anjandasnitj@gmail.com",
    password: "1234"
}];
class Recruiter {
    static getAllUsers() {
        return Users;
    }
    static addUser(name, email, password) {
        Users.push({
            "id": Users.length + 1,
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
    static makeApplicantObj(email, contact, resumePath) {
        return {
            "email": email,
            "contact": contact,
            "resumepath": resumePath
        };
    }
}
export default Recruiter;