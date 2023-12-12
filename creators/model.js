import mongoose from 'mongoose';
import creatorSchema from './creatorSchema.js'; 

const Creator = mongoose.model('Creator', creatorSchema);

export default Creator;
