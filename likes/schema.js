import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
    gameId:String,
},{collection:'likes'});

export default schema;