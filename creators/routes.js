import * as creatorDao from './dao.js';

function CreatorRoutes(app) {
    app.get('/api/creators', async (req, res) => {
        try {
            const creators = await creatorDao.findAllCreators();
            res.json(creators);
        } catch (error) {
            console.error('Error fetching creators:', error);
            res.status(500).json({ message: "Error fetching creators", error });
        }
    });

   
}

export default CreatorRoutes;
