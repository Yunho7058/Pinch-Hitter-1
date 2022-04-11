const express = require('express');
const router = express.Router();
const controller = require('../controller/board');

router.get('/', controller.getAllBoard);
router.get('/getuserboard', controller.getUserBoard);
router.get('/:boardId', controller.getBoard);
router.post('/', controller.createBoard);
router.patch('/', controller.updateBoard);
router.delete('/:boardId', controller.deleteBoard);

module.exports = router;
