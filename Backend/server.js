const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db= require("./db");


const app = express();
const port = process.env.PORT|| 8080

app.listen(port,()=>{
    console.log(`server is running on port number : ${port}`)
});

