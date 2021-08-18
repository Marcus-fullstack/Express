const express = require('express');
const {
    createAttraction,
    getAttraction,
    getAttractionById,
    deleteAttraction,
} = require('../controllers/Atractions');
const {
    createBrunch,
    getBrunch,
    getBrunchById,
    deleteBrunch,
} = require('../controllers/Brunches');


const router = express.Router();

router.post('/', createAttraction);
router.get('/', getAttraction);
router.get('/:id', getAttractionById);
router.delete('/:id', deleteAttraction);

router.post('/', createBrunch);
router.get('/', getBrunch);
router.get('/:id', getBrunchById);
router.delete('/:id', deleteBrunch);


module.exports = router;