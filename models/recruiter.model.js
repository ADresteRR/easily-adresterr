const Users = [];
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

export default Recruiter;