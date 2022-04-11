require('dotenv').config();
const axios = require('axios');
const crypto = require('crypto');
const { google } = require('googleapis');
const { User } = require('../models');
const { generateAccessToken, sendAccessToken } = require('./functions/user');

module.exports = {
  google: async (req, res) => {
    console.log('구글 로그인');
    const accessCode = req.body.data;

    try {
      const userInfo = await axios.get(
        'https://www.googleapis.com/oauth2/v2/userinfo?access_token=' +
          accessCode,
        {
          headers: {
            authorization: `token ${accessCode}`,
            accept: 'application/json',
          },
        }
      );

      const { email } = userInfo.data;

      //* 카카오와 동일 구글 유저 eamil만 불러온 상태
      console.log('구글 유저 email');

      let dontBreak = true;
      let uniqueNickname;
      const nicknameData = await User.findAll({ attributes: ['nickname'] });
      const nickNames = nicknameData.map((el) => el.dataValues.nickname);
      while (dontBreak) {
        const key1 = crypto.randomBytes(256).toString('hex').substr(100, 4);
        const randomNum = parseInt(key1, 16);
        const nick = 'G' + randomNum;
        if (!nickNames.includes(nick)) {
          uniqueNickname = nick;
          dontBreak = false;
        }
      }

      const userData = await User.create({
        user_id: email,
        email,
        nickname: uniqueNickname,
        password: '',
        mobile: '',
      });

      const accessToken = generateAccessToken(userData.dataValues);
      sendAccessToken(res, accessToken);
    } catch (err) {
      console.log(err);
    }
  },

  kakao: async (req, res) => {
    const authorizationCode = req.body.data;

    console.log('111111');
    try {
      let kakaoToken = await axios.post(
        `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_CLIENT_ID}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${authorizationCode}`,
        {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
          },
          withCredentials: true,
        }
      );
      console.log('222222');
      let userInfo = await axios.get(`https://kapi.kakao.com/v2/user/me`, {
        headers: {
          Authorization: `Bearer ${kakaoToken.data.access_token}`,
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8;',
        },
        withCredentials: true,
      });

      const { email } = userInfo.data.kakao_account;

      console.log('카카오 유저 email');
      console.log(email);
      let dontBreak = true;
      let uniqueNickname;
      const nicknameData = await User.findAll({ attributes: ['nickname'] });
      const nickNames = nicknameData.map((el) => el.dataValues.nickname);
      while (dontBreak) {
        const key1 = crypto.randomBytes(256).toString('hex').substr(100, 4);
        const randomNum = parseInt(key1, 16);
        const nick = 'K' + randomNum;
        if (!nickNames.includes(nick)) {
          uniqueNickname = nick;
          dontBreak = false;
        }
      }
      console.log('333333');
      const userData = await User.create({
        user_id: email,
        email,
        nickname: uniqueNickname,
        password: '',
        mobile: '',
      });

      const accessToken = generateAccessToken(userData.dataValues);
      sendAccessToken(res, accessToken);
    } catch (err) {
      //console.log(err);
    }
  },
};
