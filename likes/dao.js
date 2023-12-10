import model from "./model.js";

export const findAllLikes = () => model.find();

export const  createUserLikesGame = (userId,gameId) => model.create({user:userId,gameId:gameId});

export const deleteUserLikesGame = (userId,gameId) => model.deleteOne({user:userId,gameId:gameId});

export const findUsersThatLikeGame = (gameId) => model.find({gameId:gameId});
export const findGamesLikedByUser = (userId) => model.find({user:userId});