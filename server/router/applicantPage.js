const express = require('express');
const router = express.Router();
const controller = require('../controller/board');

router.post('/', controller.participate);
router.delete('/:boardId/:userId', controller.cancelParticipate);
router.get('/', controller.getAllApplicant);
router.get('/:userId', controller.getAppliedBoard);

module.exports = router;
