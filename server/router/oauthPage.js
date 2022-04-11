const express = require('express');
const router = express.Router();
const controller = require('./../controller/oauth');

router.post('/google', controller.google);
router.post('/kakao', controller.kakao);

module.exports = router;