const express = require("express");
const mongoose = require("mongoose");


main().then((req,res)=>{
     console.log("MongoDB Connected Successfully");
}).catch((err)=>{
    console.log(err);
});
   


async function main(){
    await mongoose.connect(process.env.MONGO_URL);
    
};