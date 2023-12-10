import mongoose from "mongoose";
const schema = new mongoose.Schema({
    username:{type:String, unique:true,required:true},
    password:{type:String,required:true},
    email: { type: String, required: true, unique: true },
    createDate: { type: Date },
    role:{type:String,enum:["admin","user"],default:"user"},
    dob:Date,
    firstName:String,
    lastName:String,
},{collection:"users"});

export default schema;
