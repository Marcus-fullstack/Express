const express = require('express');
const { tryLogin, authorize, logoff } = require('../controllers/auth');
//ainda não tem o try Login
//nem o autorize
const router = express.Router();

router.post('/', tryLogin);
router.post('/authorize', authorize);
router.post('/logoff', logoff);

module.exports = router;