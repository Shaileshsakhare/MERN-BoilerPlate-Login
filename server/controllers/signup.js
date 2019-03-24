const User = require('../models/User.js');

class SignUp {

    signUpUser() {
        return new Promise((resolve, reject) => {
            const newUser = new User();
            newUser.email = email;
            newUser.firstName = firstName;
            newUser.lastName = lastName;
            newUser.password = newUser.generateHash(password);
            newUser.save = ((err, user) => {
                if (err) {
                    reject({
                        success: false,
                        message: 'Error : Server error'
                    });
                }
                resolve({
                    success: true,
                    message: 'Signed Up'
                });
            });
        });
    }
}

module.exports = SignUp;