import * as testerDao from './dao.js';

function TesterRoutes(app) {
    app.get('/api/testers', async (req, res) => {
        try {
            const testers = await testerDao.findAllTesters();
            res.json(testers);
        } catch (error) {
            console.error('Error fetching testers:', error);
            res.status(500).json({ message: "Error fetching testers", error });
        }
    });

    app.post('/api/testers/review', async (req, res) => {
        try {
            const userId = req.body.userId;
            const reviewData = {
                gameId: req.body.gameId,
                gameName: req.body.gameName,
                text: req.body.text
            };

            const savedReview = await testerDao.addReview(userId, reviewData);
            res.status(201).json(savedReview);
        } catch (error) {
            console.error('Error adding review:', error);
            res.status(500).json({ message: "Error adding review", error });
        }
    });

    app.get('/api/testers/reviews/:gameId', async (req, res) => {
        try {
            const gameId = req.params.gameId;
            const reviews = await testerDao.findReviewsByGameId(gameId);
            res.json(reviews);
        } catch (error) {
            console.error('Error fetching reviews:', error);
            res.status(500).json({ message: "Error fetching reviews", error });
        }
    });


    app.get('/api/testers/reviews/user/:userId', async (req, res) => {
        try {
            const userId = req.params.userId;
            const reviews = await testerDao.findReviewsByUserId(userId);
            res.json(reviews);
        } catch (error) {
            console.error('Error fetching reviews by user:', error);
            res.status(500).json({ message: "Error fetching reviews by user", error });
        }
    });


}

export default TesterRoutes;
