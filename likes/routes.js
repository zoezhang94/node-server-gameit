import * as dao from './dao.js';

function LikesRoutes(app){

    const createUserLikesMovie = async (req, res) => {
        const userId = req.params.userId;
        const gameData = req.body;
        console.log("Received data in route handler: ", gameData); 
    
        const like = await dao.createUserLikesMovie(userId, gameData);
        res.json(like);
    };
    
    const deleteUserLikesMovie = async (req, res) => {
        const { userId, gameId } = req.params;
        console.log("Received in backend for deletion: ", userId, gameId);
        try {
            const result = await dao.deleteUserLikesMovie(userId, gameId);
            if (result.deletedCount === 0) {
                return res.status(404).send('No like found to delete.');
            }
            res.send('Like deleted successfully.');
        } catch (error) {
            console.error("Error deleting like", error);
            res.status(500).send('Internal Server Error');
        }
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

    app.post('/api/users/:userId/likes', createUserLikesMovie);
    app.delete('/api/users/:userId/likes/:gameId', deleteUserLikesMovie);
    app.get('/api/likes/:gameId/users', findUsersThatLikeMovie);
    app.get('/api/users/:userId/likes', findMoviesLikedByUser);

}

export default LikesRoutes;