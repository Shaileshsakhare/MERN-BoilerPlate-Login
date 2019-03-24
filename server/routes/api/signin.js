//const Counter = require('../../models/Counter');
const SignUp = require('../../controllers/signup.js');

module.exports = (app) => {
    app.get('/api/counters', (req, res, next) => {
        return res.send({
            "path": "success"
        })
        // Counter.find()
        //     .exec()
        //     .then((counter) => res.json(counter))
        //     .catch((err) => next(err));
    });

    //   app.post('/api/counters', function (req, res, next) {
    //     const counter = new Counter();

    //     counter.save()
    //       .then(() => res.json(counter))
    //       .catch((err) => next(err));
    //   });

    /*
    * Sign Up
    */
    app.post('api/accounts', (req, res, next) => {
        console.log('Hi');
        const { body } = req;
        const { firstName, lastName, email, password } = body;

        if (!firstName) {
            return res.send({
                success: false,
                message: "First Name can not be blank"
            });
        }
        if (!lastName) {
            return res.send({
                success: false,
                message: "Last Name can not be blank"
            });
        }
        if (!email) {
            return res.send({
                success: false,
                message: "Email can not be blank"
            });
        }

        if (!password) {
            return res.send({
                success: false,
                message: "Password can not be blank"
            });
        }

        email = email.toLowerCase();

        SignUp.signUpUser(firstName, lastName, email, password)
            .then((data) => {
                res.send(data);
            })
            .catch(e => reject(e));
    });
};
