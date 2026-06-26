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

module.exports = {
    NewRegister
}