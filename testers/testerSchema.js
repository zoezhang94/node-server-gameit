import mongoose from 'mongoose';
const { Schema } = mongoose;

const testerSchema = new Schema({
    userAccount: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        gameId: String, 
        gameName: String,
        text: String,
        username: String, 
        userId: Schema.Types.ObjectId, 
        reviewDate: { type: Date, default: Date.now } 
    }]
}, { timestamps: true });


export default testerSchema;

