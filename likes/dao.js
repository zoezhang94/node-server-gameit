import model from "./model.js";

export const findAllLikes = () => model.find();

export const createUserLikesMovie = (userId, gameId) => {
    console.log("Creating Like in DAO: ", userId, gameId);
    return model.create({ user: userId, gameId: gameId });
};


export const deleteUserLikesMovie =(userId, gameId) => 
model.deleteOne({user:userId, gameId:gameId});

export const findUsersThatLikeMovie = (gameId) => 
model.find({gameId:gameId}).populate("user");

export const findMoviesLikedByUser = (userId) =>
model.find({user:userId});


