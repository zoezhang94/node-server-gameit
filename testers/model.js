import mongoose from 'mongoose';
import testerSchema from './testerSchema.js'; 

const Tester = mongoose.model('Tester', testerSchema);

export default Tester;
