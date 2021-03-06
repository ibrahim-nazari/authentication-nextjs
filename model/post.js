import mongoose from "mongoose";
let {Schema}=mongoose;
let NAME="Post"
let post= new Schema({
    title:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},
    author:{type:String,required:true},
    author_avatar:{type:String,required:true},
    author_id:{type:String,required:true}

},{timestamps:true});
export default mongoose.models[NAME] || mongoose.model(NAME,post)