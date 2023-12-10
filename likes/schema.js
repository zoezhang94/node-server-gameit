import mongoose from 'mongoose';
const schema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    gameId: String  // 确保这一行存在
}, { collection: 'likes' });


export default schema;