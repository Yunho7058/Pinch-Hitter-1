require('dotenv').config();
const { User } = require('../models');
const { hashPassword } = require('./functions/security');

module.exports = {

    idCheck: (req, res) => {
        const { users_id } = req.body;
    
        User.findOne({ where: { users_id: users_id } })
          .then((data) => {
            if (data) {
              console.log('400번대');
              return res
                .status(404)
                .json({ success: false, message: '사용이 불가능한 이메일입니다' });
            } else {
              console.log('200번대');
    
              return res
                .status(200)
                .json({ success: true, message: '사용이 가능한 이메일입니다' });
            }
          })
          .catch((err) => console.log(err));
      },
    
      nicknameCheck: (req, res) => {
        const { nickname } = req.body;
    
        User.findOne({ where: { name: nickname } })
          .then((data) => {
            if (data) {
              return res
                .status(404)
                .json({ success: false, message: '사용이 불가능한 별명입니다' });
            } else {
              return res
                .status(200)
                .json({ success: true, message: '사용이 가능한 별명입니다' });
            }
          })
          .catch((err) => console.log(err));
      },
    
      signup: async (req, res) => {
        const { users_id, password, nickname, email, mobile } = req.body;
        const hashPw = await hashPassword(password);
    
        User.findOrCreate({
          where: { users_id },
          defaults: { password: hashPw, nickname, email, mobile },
        }).then((data) => {
          return res
            .status(200)
            .json({ success: true, message: '회원가입에 성공하였습니다' });
        });
      },
}