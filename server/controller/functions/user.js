require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');
const { User } = require('../../models');
const bcrypt = require('bcryptjs');
const { hashPassword } = require('./security');

const authorized = (accessToken) => {
  if (!accessToken) return null;
  try {
    return verify(accessToken, process.env.ACCESS_SECRET);
  } catch (err) {
    console.log(err);
    return null;
  }
};

module.exports = {
  generateAccessToken: (data) => {
    console.log('액세스토큰생성부분');
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: '2h' });
  },

  sendAccessToken: (res, accessToken) => {
    res
      .cookie('accessToken', accessToken, {
        httpOnly: false,
        secure: true,
        sameSite: 'None',
        expires: new Date(Date.now() + 1 * 1000 * 60 * 60 * 24),
      })
      .json({ data: accessToken });
  },

  isAuthorized: (req) => {
    if (req.headers.cookie) {
      const accessToken = req.headers.cookie.split('=')[1];

      if (!accessToken) return null;
      try {
        return verify(accessToken, process.env.ACCESS_SECRET);
      } catch (err) {
        console.log(err);
        return null;
      }
    }
  },

  updateNickname: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);

    if (!accessToken) {
      resObject['code'] = 401;
      resObject['message'] = '로그인 시간이 만료되었습니다';

      return resObject;
    }
    if (req.body.nickname) {
      const userFindOne = await User.findOne({
        where: { email: req.body.nickname },
      });

      try {
        if (userFindOne) {
          resObject.code = 204;
          throw 'email 중복';
        }
      } catch (error) {
        console.log(error);
        return resObject;
      }
    }

    await User.update(req.body, {
      where: { id: accessToken.id },
    })
      .then(() => {
        resObject.code = 201;
        resObject.message = '유저 정보를 수정하였습니다';
      })
      .catch(() => {
        resObject.code = 400;
        resObject.message = '유저 정보를 수정하지 못하였습니다';
      });

    return resObject;
  },
  updateMobile: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);
    if (!accessToken) {
      resObject.code = 401;
      resObject.message = '로그인 시간이 만료되었습니다';

      return resObject;
    }
    if (req.body.mobile) {
      const userFindOne = await User.findOne({
        where: { mobile: req.body.mobile },
      });

      try {
        if (userFindOne) {
          resObject.code = 204;
          throw 'mobile 번호 중복';
        }
      } catch (error) {
        console.log(error);
        return resObject;
      }
    }

    await User.update(req.body, {
      where: { id: accessToken.id },
    })
      .then(() => {
        resObject.code = 201;
        resObjectmessage = '유저 정보를 수정하였습니다';
      })
      .catch(() => {
        resObject.code = 400;
        resObject.message = '유저 정보를 수정하지 못하였습니다';
      });

    return resObject;
  },
  updatePassword: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);
    try {
      if (!accessToken) {
        resObject.code = 401;
        throw '로그인하여 주시기 바랍니다';
      }

      const userData = await User.findOne({ where: { id: accessToken.id } });
      const match = await bcrypt.compare(
        req.body.password,
        userData.dataValues.password
      );
      if (!match) {
        resObject.code = 400;
        throw '비밀번호를 잘못 입력하였습니다';
      }

      const password = await hashPassword(req.body.new_password);
      await User.update(
        {
          password,
        },
        {
          where: { id: userData.dataValues.id },
        }
      )
        .then(() => {
          resObject.code = 201;
          resObject.message = '비밀번호가 변경 되었습니다';
        })
        .catch((error) => {
          console.log(error);
          resObject.code = 500;
          resObject.message = '서버에 오류가 발생했습니다';
        });
    } catch (error) {
      console.log(error);
      resObject.message = error;
    }
    return resObject;
  },
  unregister: async (req) => {
    const resObject = {};
    const accessToken = authorized(req.cookies.accessToken);
    try {
      if (!accessToken) {
        resObject.code = 401;
        throw '로그인하여 주시기 바랍니다';
      }
      await User.destroy({
        where: { id: accessToken.id },
      })
        .then((data) => {
          console.log(data);
          resObject.code = 201;
          resObject.message = '회원탈퇴 되었습니다';
        })
        .catch((error) => {
          console.log(error);
          resObject.code = 500;
          resObject.message = '서버에 오류가 발생했습니다';
        });
    } catch (error) {
      console.log(error);
      resObject.message = error;
    }
    return resObject;
  },
};
