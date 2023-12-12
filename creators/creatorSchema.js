import mongoose from 'mongoose';
const { Schema } = mongoose;

const creatorSchema = new Schema({
    name: String,
    games_count: Number,
    positions: [{
        name: String
    }],
    games: [{
        name: String,
        id: Number,
    }],
    userAccount: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });


export default creatorSchema;

