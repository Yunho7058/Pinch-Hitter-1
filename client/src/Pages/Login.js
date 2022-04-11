import axios from 'axios';
import { useState } from 'react';
import '../App.css';
import styled, { keyframes } from 'styled-components';
import { AiOutlineDoubleRight } from 'react-icons/ai';

export const LoginBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginInput = styled.input`
  width: 200px;
  height: 40px;
  outline: none;
  padding-left: 10px;
  margin-top: 2px;

  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;

  border-radius: 12px;

  font-size: 1.2rem;
`;

export const LoginBtn = styled.div`
  width: 90px;
  height: 90px;
  background: #778899;
  color: white;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 90px;
  border-radius: 10px;
  margin-left: 5px;

  cursor: pointer;

  &:hover {
    background-color: #5b6875;
  }
`;
export const LoginFailMsg = styled.div`
  color: red;
  font-size: 11px;
  width: 220px;
`;

export const LoginInputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
`;

export const MoveBtn = keyframes`
0%{
  right: 2px;
}
100%{
  right: 0px;
}
`;
export const LoginSignupBtn = styled.div`
  cursor: pointer;
  position: absolute;
  color: white;
  bottom: -28px;
  right: -15px;
  width: 100px;
  font-size: 15px;
  font-weight: 400;
  &:hover {
    text-decoration: underline;
  }

  > svg {
    position: absolute;
    top: 1px;
    animation: ${MoveBtn} 2s 5s infinite;
  }
`;
export const LoginLine = styled.hr`
  opacity: 0.5;
  size: 40;
  width: 260px;
`;
export const SNSLoginBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const SNSKakao = styled.div`
  > img {
    width: 80px;
    height: 40px;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
    }
  }
`;
export const SNSGoogle = styled.div`
  width: 60px;
  height: 38px;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  padding-left: 18px;
  line-height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  margin-left: 20px;
  position: relative;
  cursor: pointer;
  > img {
    position: absolute;
    top: 11px;
    left: 5px;
    width: 18px;
    height: 18px;
  }
  &:hover {
    transform: scale(1.03);
  }
`;
function Login({
  setIsLogin,
  clickSignup,
  openModal,
  setShowModal,
  getUserInfo,
}) {
  //입력 정보와 성공실패 메세지
  const [loginInfo, setLoginInfo] = useState({ user_id: '', password: '' });
  const [failureLoginMsg, setFailureLoginMsg] = useState(<br></br>);

  const inputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const handleLogin = () => {
    if (!(loginInfo.user_id, loginInfo.password)) {
      setFailureLoginMsg('아이디와 비밀번호를 입력해 주세요.');
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URI}login`, loginInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          window.localStorage.setItem('IsRefresh', true);
          setIsLogin(true);
          getUserInfo();
          openModal();
        })
        .catch((err) => {
          setFailureLoginMsg('아이디 또는 비밀번호가 일치하지 않습니다.');
          console.log(err);
          console.log('로그인 중 err');
        });
    }
  };
  const handleSignupPage = () => {
    clickSignup();
  };

  //카카오 로그인
  const handleKakaoLogin = () => {
    console.log('카카오 실행');
    window.location.assign(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`
    );
    openModal();
  };

  //구글 로그인
  const handleGoogleLogin = () => {
    window.location.assign(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&response_type=token&scope=https://www.googleapis.com/auth/userinfo.email`
    );
    openModal();
  };

  return (
    <LoginBack>
      <div>
        <img src="img/pinchLog_remove.png" width="200px" height="100px" />
      </div>
      <LoginInputBox>
        <div>
          <LoginInput
            type="id"
            placeholder="아이디"
            onChange={inputValue('user_id')}
          />
          <LoginInput
            type="password"
            placeholder="비밀번호"
            onChange={inputValue('password')}
          />
          <LoginFailMsg>{failureLoginMsg}</LoginFailMsg>
        </div>
        <div>
          <LoginBtn onClick={handleLogin}>로그인</LoginBtn>
        </div>
      </LoginInputBox>
      <div></div>
      <LoginLine></LoginLine>
      <SNSLoginBox>
        <SNSKakao onClick={() => handleKakaoLogin()}>
          <img src="img/kakao_login_large.png" />
        </SNSKakao>
        <SNSGoogle onClick={() => handleGoogleLogin()}>
          <img src="img/google-logo.jpeg" />
          로그인
        </SNSGoogle>
      </SNSLoginBox>
      <LoginSignupBtn onClick={handleSignupPage}>
        회원가입
        <AiOutlineDoubleRight size={20} />
      </LoginSignupBtn>
    </LoginBack>
  );
}

export default Login;
