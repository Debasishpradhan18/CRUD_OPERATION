const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db= require("./db");
const studentRoute = require("./routes/student.route");


const app = express();
app.use(express.json());

const port = process.env.PORT|| 8080


app.use("/students",studentRoute);



app.listen(port,()=>{
    console.log(`server is running on port number : ${port}`)
});

