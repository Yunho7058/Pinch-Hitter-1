const { User, Board } = require('../../models');
const { isAuthorized } = require('./user');

module.exports = {
  createBoard: async (req, res) => {
    const resObject = {};
    const accessToken = isAuthorized(req);

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        const { title, occupation, wage, work_date, work_place, content } =
          req.body;

        console.log('try 들어옴');
        await Board.create({
          user_id: accessToken.id,
          title: title,
          occupation: occupation,
          wage: wage,
          work_date: work_date,
          work_place: work_place,
          content: content,
        });
        console.log('여기');
        resObject.code = 201;
        resObject.message = '게시글 작성이 완료되었습니다';
        return resObject;
      } catch (err) {
        console.log(err);
        resObject.code = 400;
        resObject.message = '게시글을 작성하지 못하였습니다';
        return resObject;
      }
    }
  },

  updateBoard: async (req, res) => {
    const accessToken = isAuthorized(req, res);
    const resObject = {};
    const board = req.body;

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        await Board.update(board, { where: { id: board.id } });
        resObject.code = 201;
        resObject.message = '게시글이 수정되었습니다';
        return resObject;
      } catch (err) {
        console.log(err);
        resObject.code = 400;
        resObject.message = '게시글을 수정하지 못하였습니다';
        return resObject;
      }
    }
  },

  deleteBoard: async (req, res) => {
    const accessToken = isAuthorized(req, res);
    const resObject = {};
    const board = req.params.boardId;
    console.log(board);

    if (!accessToken) {
      res.status(401).json({ message: '로그인 해주세요' });
    } else {
      try {
        console.log(req.body);

        await Board.destroy({ where: { id: board } });
        resObject.code = 201;
        resObject.message = '게시글이 삭제되었습니다';
        return resObject;
      } catch (err) {
        console.log(err);
        resObject.code = 400;
        resObject.message = '게시글을 삭제하지 못하였습니다';
        return resObject;
      }
    }
  },
};
