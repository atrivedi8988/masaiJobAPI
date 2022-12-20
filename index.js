const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const userRoute = require("./Router/user.route")
const jobRoute = require("./Router/jobRoute")

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set("strictQuery",true)

app.get("/",(req,res)=>{
    res.send("Home page")
})

app.use("/",jobRoute)
app.use("/user",userRoute)


mongoose.connect("mongodb+srv://aman:amantrivedi@cluster0.ddklfbc.mongodb.net/revisionshop").then(()=>{
    app.listen(8080,()=>{
        console.log("listening on port 8080")
    })
})