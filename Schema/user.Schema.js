const {Schema,model} = require("mongoose")

const UserSchema = new Schema({
name:String,
diffLevel:String
})

const UserModel = new model("user", UserSchema)

module.exports = UserModel