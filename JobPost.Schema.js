const {Schema,model} = require("mongoose")

const JobPostSchema = new Schema({
company:String,
postedAt:String,
city:String,
location:String,
role:String,
level:String,
contract:String,
position:String,
language:String,
})

const JobPostModel = new model("jobpost",JobPostSchema)

module.exports = JobPostModel