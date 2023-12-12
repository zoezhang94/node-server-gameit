import mongoose from 'mongoose';
const { Schema } = mongoose;

const creatorSchema = new Schema({
    userAccount: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [{
        text: String,
    }]
}, { timestamps: true });


export default creatorSchema;

