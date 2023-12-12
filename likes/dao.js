import model from "./model.js";

export const findAllLikes = () => model.find();

export const createUserLikesMovie = (
    userId, 
    { gameId, gameTitle, releaseDate, backgroundImage, genres }
) => {
    console.log("Creating Like: ", userId, gameId, gameTitle, releaseDate, backgroundImage, genres);
    return model.create({
        user: userId,
        gameId: gameId,
        gameTitle: gameTitle,
        releaseDate: releaseDate,
        backgroundImage: backgroundImage,
        genres: genres
    });
};


export const deleteUserLikesMovie = (userId, gameId) => {
    console.log("Deleting Like: ", userId, gameId);
    return model.deleteOne({ user: userId, gameId: gameId });
};

export const findUsersThatLikeMovie = (gameId) => 
model.find({gameId:gameId}).populate("user");

export const findMoviesLikedByUser = (userId) =>
model.find({user:userId});


