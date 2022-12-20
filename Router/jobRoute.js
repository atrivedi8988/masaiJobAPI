const app = require("express"); 
const JobPostModel = require("../Schema/JobPost.Schema");


const router = app.Router();

router.get("/jobget",async (req,res)=>{
    const jobs = await JobPostModel.find()
    // console.log(jobs)
    res.send(jobs)
})

router.post("/jobpost",async(req,res)=>{   
    const jobpost = new JobPostModel(req.body);
    await jobpost.save();
    res.send("posted successfully")
})


module.exports = router
