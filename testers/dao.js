import Tester from './model.js'; 

export const findAllTesters = async () => {
  return await Tester.find();
};
