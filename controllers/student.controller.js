const Student = require("../models/student");


// Create ---------student

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

// Read ------------student

const getStudents = async (req, res) => {
    try {
        const readData = await Student.find();
        res.send(readData);
    } catch (error) {
        res.status(500).send("something went wronge");
        console.log(error);


    }



};




module.exports = {
    createStudent,getStudents
};

