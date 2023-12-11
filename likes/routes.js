import * as dao from './dao.js';

function LikesRoutes(app){

    const createUserLikesMovie = async (req, res) => {
        const userId = req.params.userId;
        const gameId = req.params.gameId;
        console.log("Received in backend: ", userId, gameId);
        const likes = await dao.createUserLikesMovie(userId, gameId); 
        res.json(likes);
    };
    

    const deleteUserLikesMovie = async (req, res) => {

    };

    const findUsersThatLikeMovie = async (req, res) => {
        const gameId = req.params.gameId;
        const likes = await dao.findUsersThatLikeMovie(gameId);
        res.json(likes);
    };

    const findMoviesLikedByUser = async (req, res) => {
        const userId = req.params.userId;
        const likes = await dao.findMoviesLikedByUser(userId);
        res.json(likes);
    };

    app.post('/api/users/:userId/likes/:gameId', createUserLikesMovie);
    app.delete('/api/users/:userId/games/:gameId/likes', deleteUserLikesMovie);
    app.get('/api/likes/:gameId/users', findUsersThatLikeMovie);
    app.get('/api/users/:userId/likes', findMoviesLikedByUser);

}

export default LikesRoutes;