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

   
}

export default TesterRoutes;
