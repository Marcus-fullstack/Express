const express = require('express');
const {
    createBrunch,
    getBrunches,
    getBrunchById,
    deleteBrunch,
} = require('../controllers/Brunchs');

const router = express.Router();

router.post('/', createBrunch);
router.get('/', getBrunches);
router.get('/:id', getBrunchById);
router.delete('/:id', deleteBrunch);

module.exports = router;