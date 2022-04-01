const express = require('express');
const router = express.Router();
const controller = require('../controller/board');

router.get('/', controller.getAllBoard);
router.get('/:userId', controller.getUserBoard);
router.get('/:boardId', controller.getBoard);
router.post('/', controller.createBoard);
router.patch('/', controller.updateBoard);
router.delete('/', controller.deleteBoard);

module.exports = router;