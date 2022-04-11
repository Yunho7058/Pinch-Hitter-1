const express = require('express');
const controller = require('../controller/logout');
const router = express.Router();

router.get('/', controller.logout);

module.exports = router;
