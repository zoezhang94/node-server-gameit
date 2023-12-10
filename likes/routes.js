import * as dao from './dao.js';

function LikesRoutes(app) {
    const findAllLikes = async(req,res) =>{
        const likes = await dao.findAllLikes();
        res.json(likes);
    };
    const createUserLikesGame = async(req,res) =>{
        const userId = req.params.userId;
        const gameId = req.params.gameId;
        const likes = await dao.createUserLikesGame(userId,gameId);
        res.json(likes);
    };
    const deleteUserLikesGame = async(req,res) =>{};
    const findUsersThatLikeGame = async(req,res) =>{
        const gameId = req.params.gameId;
        const likes = await dao.findUsersThatLikeGame(gameId);
        res.json(likes);
    };
    const findGamesLikedByUser = async(req,res) =>{};

    app.get('/api/likes', findAllLikes);
    app.post('/api/users/:userId/likes/:gameId', createUserLikesGame);
    app.delete('/api/users/:userId/likes/:GameId', deleteUserLikesGame);
    app.get('/api/likes/:GameId/users', findUsersThatLikeGame);
    app.get('/api/users/:userId/games', findGamesLikedByUser);

}

export default LikesRoutes;