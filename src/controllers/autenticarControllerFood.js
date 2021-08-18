import { express, Router } from 'express';
import Food from '../models_brunch/brunch';

const router = express.Router();

router.post('/registerFood', async(req, res) => {
    try {
        const food = await Food.create(req.body);
        return res.send({ food });
    } catch (err) {
        return res.status(400).send({ error: 'Registration of Food failed' })
    }
});

export default server => server.use('/registers', router);