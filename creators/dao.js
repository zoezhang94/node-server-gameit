import Creator from './model.js'; 

export const findAllCreators = async () => {
  return await Creator.find();
};
