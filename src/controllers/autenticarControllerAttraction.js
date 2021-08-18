import { express, Router } from 'express';
import Attraction from '../models_attractions/attractions';

//nessa parte entra o express validator que esta em scr/index.js
const router = express.Router();

router.post('/registerAttraction', async(req, res) => {
    try {
        const { attraction } = await Attraction.create(req.body);
        return res.send({ attraction });
    } catch {
        return res.status(400).send({ error: 'Registration of Attraction failed' })
    }
});

export default server => server.use('/registers', router);