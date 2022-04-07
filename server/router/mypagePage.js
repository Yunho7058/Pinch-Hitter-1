const express = require('express');
const router = express.Router();
const controller = require('../controller/mypage');

router.get('/users', controller.getUserInfo);
router.patch('/nickname', controller.updateNickname);
router.patch('/mobile', controller.updateMobile);
router.patch('/password', controller.updatePassword);
router.delete('/signout', controller.unregister);
// router.get('/applicants', controller.getAllApplicant);
// router.get('/applicants/:userId', controller.getAppliedgBoard);

module.exports = router;
