const knex = require("../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pick = require("lodash/pick");
const { isEmpty } = require("lodash");
const _ = require("lodash");

module.exports = {
    signUpHandler: async (req, res) => {
        const {email,fullname, phonenumber, password} = req.body;
        const results = await knex.search("edify.user", { email });
        if (!isEmpty(results))
            return res.status(401).json({ errored: true, error: "Account Already exists" });
        const salt = await bcrypt.genSalt(15);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await knex.create("edify.user", {
            full_name: fullname,
            email: email,
            phone_number: phonenumber,
            password_hash: hashedPassword,
        });
        jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: 1 * 24 * 60  },
            (err, token) => {
                // if (err)
                //     return res.status(500).json({ err, message: "Internal Server Error" });
                res.status(200).json({ user, token: token });
            }
        );
    },

    signInHandler: async (req, res) => {
        const { email, password } = req.body;
        const results = await knex.search("edify.user", { email });
        if (isEmpty(results))
            return res.status(401).json({ error: "This acoount does not exist" });
        const validPassword = await bcrypt.compare(password, results.password_hash);
        if (!validPassword)
            return res.status(400).json({ error: "wrong password" });
        const response = pick(results, ["user_id", "email"]);
        jwt.sign({ response }, process.env.SECRET_KEY, (errors, jwt) => {
            if (errors)
                return res.status(500).json({ errors });
            return res.status(200).json({ ...response, token: jwt });
        });
    },
};
