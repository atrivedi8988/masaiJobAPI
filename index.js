const express = require("express");
const mongoose = require("mongoose");
const JobPostModel = require("./JobPost.Schema")

const app = express();
app.use(express.json());

mongoose.set("strictQuery",true)

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.get("/jobget",async (req,res)=>{
    const jobs = await JobPostModel.find()
    console.log(jobs)
    res.send(jobs)
})

app.post("/jobpost",async(req,res)=>{   
    const jobpost = new JobPostModel(req.body);
    await jobpost.save();
    res.send("posted successfully")
})


mongoose.connect("mongodb+srv://aman:amantrivedi@cluster0.ddklfbc.mongodb.net/revisionshop").then(()=>{
    app.listen(8080,()=>{
        console.log("listening on port 8080")
    })
})