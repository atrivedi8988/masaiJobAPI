const app = require("express");
const UserModel = require("../Schema/user.Schema");


const router = app.Router();

router.get("/",(req,res)=>{
    res.send("user route")
})

router.post("/post",(req,res)=>{
    console.log(req.body)
    const user = new UserModel(req.body)
    user.save();
    res.send("user added successfully")
})

module.exports = router