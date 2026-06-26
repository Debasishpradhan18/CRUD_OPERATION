const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db= require("./db");
const studentRoute = require("./routes/student.route");
const userRoute =require("./routes/user.route");



const app = express();
app.use(express.json());

const port = process.env.PORT|| 8080


app.use("/students",studentRoute);
app.use("/api/auth",userRoute);



app.listen(port,()=>{
    console.log(`server is running on port number : ${port}`)
});

