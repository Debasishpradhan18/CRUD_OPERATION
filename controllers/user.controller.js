const User = require("../models/user.js");
const bcrypt = require("bcrypt");

const NewRegister = async (req, res) => {
    try {
        const NewUser = req.body;
        const existingUser = await User.findOne({ email: NewUser.email });
        if (existingUser) {
            return res.status(400).send("User already register");
        }

        const hashedPassword = await bcrypt.hash(NewUser.password, 10);

        const user = new User({
            name: NewUser.name,
            email: NewUser.email,
            password: hashedPassword
        });

        await user.save();
        res.status(201).send("User register successfully..");

    } catch (error) {
        console.log(error);
        res.status(500).send("something went wronge");

    }
};

const LoginUser = async (req, res) => {
    try {
        const loginData = req.body;

        // Check whether the user exists

        const existingUser = await User.findOne({
            email: loginData.email
        });

        if (!existingUser) {
            return res.status(404).send("User not found");
        }

        // Compare password
        const isMatch = await bcrypt.compare(
            loginData.password,
            existingUser.password
        );

        if (!isMatch) {
            return res.status(400).send("Invalid Password");
        }
       return res.status(200).send("Login Successful");
        // Next step: Generate JWT Token

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");
    }
};

module.exports = {
    NewRegister , LoginUser
}