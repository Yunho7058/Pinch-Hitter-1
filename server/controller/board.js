const board = require('./functions/board');
const { createBoard, updateBoard, deleteBoard } = require('./functions/board');
const { isAuthorized } = require('./functions/user');
const { participate, cancelParticipate } = require('./functions/applicant');
const { Board, User } = require('../models');

module.exports = {
  createBoard: async (req, res) => {
    const resObject = await createBoard(req);
    res.status(resObject.code).send(resObject.message);
  },
  updateBoard: async (req, res) => {
    const resObject = await updateBoard(req);
    res.status(resObject.code).send(resObject.message);
  },
  deleteBoard: async (req, res) => {
    const resObject = await deleteBoard(req);
    res.status(resObject.code).send(resObject.message);
  },
  getAllBoard: async (req, res) => {
    try {
      const boardList = await Board.findAll({
        // include: [{
        //   model : User,
        //   required : true,
        //   attributes: ['nickname']
        // }]
      });
      res.status(200).json({ boardList });
    } catch (err) {
      res.status(400).json({ message: '잘못된 요청입니다' });
    }
  },
  getUserBoard: async (req, res) => {
    const userInfo = isAuthorized(req);
    console.log(userInfo);
    if (!userInfo) {
      res.status(401).json({ message: '로그인이 필요합니다' });
    } else {
      try {
        const boardList = await Board.findAll({
          // include: [{
          //   model : User,
          //   attributes: ['nickname']
          // }],
          where: { user_id: userInfo.id },
        });
        console.log(boardList);
        res.status(200).json({ boardList });
      } catch (err) {
        res.status(400).json({ message: '잘못된 요청입니다' });
      }
    }
  },
  getBoard: async (req, res) => {
    const userInfo = isAuthorized(req);
    const boardId = req.body.board_id;
    if (!userInfo) {
      res.status(401).json({ message: '로그인이 필요합니다' });
    } else {
      try {
        const boardList = await Board.findOne({
          where: { id: boardId },
        });
        res.status(200).json({ boardList });
      } catch (err) {
        res.status(400).json({ message: '잘못된 요청입니다' });
      }
    }
  },
  participate: async (req, res) => {
    const resObject = await participate(req);
    res.status(resObject.code).send(resObject.message);
  },
  cancelParticipate: async (req, res) => {
    const resObject = await cancelParticipate(req);
    res.status(resObject.code).send(resObject.message);
  },
  getAllApplicant: async (req, res) => {
    const userInfo = isAuthorized(req);

    if (!userInfo) {
      res.status(401).json({ message: '로그인이 필요합니다' });
    } else {
      try {
        const applicantList = await applicant.findAll({});
        res.status(200).json({ applicantList });
      } catch (err) {
        res.status(400).json({ message: '잘못된 요청입니다' });
      }
    }
  },
  getAppliedBoard: async (req, res) => {
    const userInfo = isAuthorized(req);
    const BoardId = req.body.boards_id;
    console.log(userInfo);

    if (!userInfo) {
      res.status(401).json({ message: '로그인이 필요합니다' });
    } else {
      try {
        console.log(postId);
        const applyingBoard = await Board.findOne({
          where: { id: BoardId },
        });
        console.log(applyingBoard);
        res.status(200).json({ applyingBoard });
      } catch (err) {
        res.status(400).json({ message: '잘못된 요청입니다' });
      }
    }
  },
};
