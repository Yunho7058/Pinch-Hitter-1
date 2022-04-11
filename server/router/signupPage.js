const express = require('express');
const router = express.Router();
const controller = require('../controller/signup');

console.log('가나다');
router.post('/idCheck', controller.idCheck);
router.post('/nicknameCheck', controller.nicknameCheck);
router.post('/', controller.signup);

module.exports = router;
