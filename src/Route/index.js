const express = require('express');
const auth = require('./auth');
const Attraction = require('./Attraction');

const router = express.Router();

router.get('/health', (req, res) => {
    res.send({ status: 'ok' });
});

router.use('/login', auth);
router.use('/Attractions', Attraction);

router.use((req, res) => {
    res.status(404).send('Not Found');
});

module.exports = router;