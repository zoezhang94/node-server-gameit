import * as dao from './dao.js';

function FollowRoutes(app) {

    const userFollowsUser = async (req, res) => {
        const follower = req.params.follower; 
        const followee = req.params.followee; 
        const follows = await dao.userFollowsUser(follower, followee);
        res.json(follows);
    };

    const userUnfollowsUser = async (req, res) => {
        const follower = req.params.follower; 
        const followee = req.params.followee; 
        const status = await dao.userUnfollowsUser(follower, followee);
        res.json(status);
    };

    const findFollowersOfUser = async (req, res) => {
        const followee = req.params.followee; 
        const followers = await dao.findFollowersOfUser(followee);
        res.json(followers);
    };

    const findFolloweeOfUser = async (req, res) => {
        const follower = req.params.follower;
        const followee = await dao.findFolloweeOfUser(follower);
        res.json(followee);
    };

    // 设置路由
    app.post('/api/users/:follower/follows/:followee', userFollowsUser);
    app.delete('/api/users/:follower/follows/:followee', userUnfollowsUser);
    app.get('/api/users/:followee/follower', findFollowersOfUser);
    app.get('/api/users/:follower/followee', findFolloweeOfUser);
}

export default FollowRoutes;
