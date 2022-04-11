const { isAuthorized } = require('./user');
const { applicant } = require('./../../models');

module.exports = {
  participate: async (req) => {
    const resObject = {};
    const accessToken = isAuthorized(req);
    console.log(accessToken);
    console.log(req.body);

    try {
      if (!accessToken) {
        throw '로그인을 해주세요';
      }
    } catch (err) {
      resObject.code = 401;
      resObject.message = err;
      return resObject;
    }

    try {
      await applicant.create({
        user_id: accessToken.id,
        board_id: req.body.board_id,
      });
      resObject.code = 204;
      resObject.message = '참가신청이 되었습니다';

      return resObject;
    } catch (err) {
      console.log(err);
      resObject.code = 400;
      resObject.message = '참가신청이 되지않았습니다';

      return resObject;
    }
  },

  cancelParticipate: async (req) => {
    const resObject = {};
    const accessToken = isAuthorized(req);

    try {
      if (!accessToken) {
        throw '로그인을 해주세요';
      }
    } catch (err) {
      resObject.code = 401;
      resObject.message = err;
      return resObject;
    }

    await applicant.destroy({
      where: {
        user_id: accessToken.users_id,
        board_id: req.body.boards_id,
      },
    });
    resObject.code = 200;
    resObject.message = '신청이 취소되었습니다';
    return resObject;
  },
};
