const Student = require("../models/student");

const createStudent = async (req, res) => {
    try {
        const data = req.body;
        const student = new Student(data);
        await student.save();
        res.send("Data saved");

    } catch (error) {
        console.log(error);
        res.status(500).send("Something went wrong");

    };


};




module.exports = {
    createStudent
};

