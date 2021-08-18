const express = require('express');
const {
    createAttraction,
    getAttractions,
    getAttractionById,
    deleteAttraction,
} = require('../controllers/autenticarControllerAttraction.js');

const router = express.Router();

router.post('/', createAttraction);
router.get('/', getAttractions);
router.get('/:id', getAttractionById);
router.delete('/:id', deleteAttraction);

module.exports = router;