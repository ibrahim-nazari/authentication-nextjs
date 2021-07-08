import mongoose from "mongoose";

let NAME="User"
let user= new mongoose.Schema({
    email:{type:String,require:true,unique:true},
    name:{type:String,required: true},
    avatar:{type:String,default:"uploads/avatar.png"}

})

export default mongoose.models[NAME] || mongoose.model(NAME,user)