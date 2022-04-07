const {
  isAuthorized,
  updateNickname,
  updateMobile,
  updatePassword,
  unregister,
} = require('./functions/user');
const { User, Post, Comment } = require('../models');

module.exports = {
  updateNickname: async (req, res) => {
    const resObject = await updateNickname(req);
    res.status(resObject.code).send(resObject.message);
  },

  updateMobile: async (req, res) => {
    const resObject = await updateMobile(req);
    res.status(resObject.code).send(resObject.message);
  },

  updatePassword: async (req, res) => {
    console.log('비번변경 서버에서 받음');
    const resObject = await updatePassword(req);
    res.status(resObject.code).send(resObject.message);
  },

  unregister: async (req, res) => {
    const resObject = await unregister(req);
    res
      .status(resObject.code)
      .clearCookie('accessToken', {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
      })
      .send(resObject.message);
  },

  getUserInfo: async (req, res) => {
    const userInfo = isAuthorized(req);
    console.log(req);
    console.log(userInfo);
    console.log('1번');

    if (!userInfo) {
      res.status(401).json({ message: '로그인이 필요합니다' });
    } else {
      try {
        const userInfoList = await User.findAll({
          where: { id: userInfo.id },
        });
        console.log('2번');
        console.log(userInfoList);
        res.status(200).json(userInfoList);
      } catch (err) {
        console.log('캐치');
        res.status(400).json({ message: '잘못된 요청입니다' });
      }
    }
  },
  // getAllApplicant: async (req, res) => {
  //   const userInfo = isAuthorized(req);

  //   if (!userInfo) {
  //     res.status(401).json({ message: '로그인이 필요합니다' });
  //   } else {
  //     try {
  //       const applicantList = await applicant.findAll({});
  //       res.status(200).json({ applicantList });
  //     } catch (err) {
  //       res.status(400).json({ message: '잘못된 요청입니다' });
  //     }
  //   }
  // },
  // getAppliedgBoard: async (req, res) => {
  //   const userInfo = isAuthorized(req);
  //   const BoardId = req.body.boards_id;

  //   if (!userInfo) {
  //     res.status(401).json({ message: '로그인이 필요합니다' });
  //   } else {
  //     try {
  //       console.log(postId);
  //       const applyingBoard = await Board.findOne({
  //         where: { id: BoardId },
  //       });
  //       res.status(200).json({ applyingBoard });
  //     } catch (err) {
  //       res.status(400).json({ message: '잘못된 요청입니다' });
  //     }
  //   }
  // },
};
