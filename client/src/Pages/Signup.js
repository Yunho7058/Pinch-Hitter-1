import axios from 'axios';
import { useRef, useState } from 'react';
import '../App.css';
import styled from 'styled-components';
import {
  FaUserAlt,
  FaLock,
  FaUserTag,
  FaMobileAlt,
  FaAt,
  FaSearch,
} from 'react-icons/fa';

export const SignupBack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

export const SignupInput = styled.input`
  width: 200px;
  height: 30px;
  outline: none;
  padding-left: 30px;
  border-top: 1px solid #eee;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  border-bottom: 1px solid #eee;
  border-radius: 12px;
  font-size: 14px;
  &.idInput {
    width: 132px;
  }
  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
  &:focus {
    border: 1px solid rgba(0, 0, 0, 0.3);
  }
`;
export const InputRelative = styled.div`
  position: relative;
  > svg {
    position: absolute;
    top: 8px;
    left: 7px;
  }
  &.idInput {
    display: flex;
  }
`;

export const MobileBox = styled.div`
  display: flex;
  height: 33px;
  font-size: 10px;
  position: relative;
  > input.header {
    font-size: 14px;
    width: 40px;
    outline: none;
    padding-left: 30px;
    border-left: none;
    border-top: 1px solid #eee;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
  }
  > input.mobilebody {
    font-size: 14px;
    width: 150px;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    outline: none;
    padding-left: 10px;

    border: 1px solid #eee;

    &:hover {
      border: 1px solid rgba(0, 0, 0, 0.1);
    }
    &:focus {
      border: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
  > svg {
    position: absolute;
    top: 8px;
    left: 7px;
  }
`;

export const Msg = styled.div`
  font-size: 12px;
  color: red;
`;

export const CheckTerms = styled.div`
  text-align: left;
  width: 220px;
  font-size: 10px;

  input {
    margin-top: 1px;

    width: 15px;
  }
`;

export const SignupIdOverlapBtn = styled.div`
  font-size: 11px;
  background-color: rgba(0, 0, 0, 0.1);
  box-shadow: 2px 1px 2px 1px #dadce0;
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-left: 5px;
  width: 60px;
  height: 30px;
  &:active {
    box-shadow: 1px 1px 1px 0px #dadce0;
    position: relative;
    right: -1px;
    top: 1px;
  }
`;
export const SignupBtn = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 8px;
  width: 200px;
  margin-bottom: 20px;
  cursor: pointer;
  font-size: 15px;
  border-radius: 15px;
  &:hover {
  }
`;
export const MiniBoxBack = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
`;
export const MiniBox = styled.div`
  width: 150px;
  padding: 15px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  margin-bottom: 1px;
  background-color: #ffffff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const MiniMsg = styled.div`
  font-size: 15px;
  width: 120px;
`;
export const MiniBtn = styled.div`
  cursor: pointer;
  box-shadow: 1px 1px 1px 1px #dadce0;
  font-size: 18px;
  background-color: #7c99ac;
  color: white;
  width: 60px;
  border-radius: 5px;
`;

function Signup({ openModal, setShowModal }) {
  const [signupInfo, setSignupInfo] = useState({
    user_id: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    email: '',
    mobile: '',
  });

  //정보 유효성 검사
  const [PasswordMsg, setPasswordMsg] = useState('');
  const [isPasswordMsg, setIsPasswordMsg] = useState(false);
  const [nameMsg, setNameMsg] = useState('');
  const [isNameMsg, setIsNameMsg] = useState(false);
  const [mobileMsg, setMobileMsg] = useState('');
  const [isMobileMsg, setIsMobileMsg] = useState(false);
  const [emailMsg, setEmailMsg] = useState('');
  const [isEmailMsg, setIsEmailMsg] = useState(false);
  //체크박스 여부
  const [isAge15, setIsAge15] = useState(false);
  const [isTrms, setIsTrms] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  //아이디 중복체크 상태 및 미니모달창 상태
  const [isIdCheck, setIsIdCheck] = useState({
    isOverId: false,
    miniMsg: '',
    isSingup: false,
  });
  //정보 입력 함수
  const inputValuePasswordC = (key) => (e) => {
    const { value } = e.target;
    if (
      (signupInfo.password !== value && signupInfo.passwordConfirm !== value) ||
      value.length === 0
    ) {
      setPasswordMsg('비밀번호를 확인해주세요.');
      setIsPasswordMsg(false);
    } else if (
      signupInfo.password === value ||
      signupInfo.passwordConfirm === value
    ) {
      setPasswordMsg('');
      setIsPasswordMsg(true);
    }
    setSignupInfo({ ...signupInfo, [key]: e.target.value });
  };
  const inputValueName = (key) => (e) => {
    const { value } = e.target;

    const nicknameReplace =
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\" | ㄱ-ㅎ | ㅏ-ㅣ]/;

    if (nicknameReplace.test(value)) {
      setNameMsg('특수문자,자음,모음,띄어쓰기를 제외해주세요.');
      setIsNameMsg(false);
    } else if (value.length < 2) {
      setNameMsg('2글자 이상 입력해주세요.');
      setIsNameMsg(false);
    } else {
      setNameMsg('');
      setIsNameMsg(true);
    }
    setSignupInfo({ ...signupInfo, [key]: value });
  };

  const inputValueMobile = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(/[^0-9]/g, '');
    if (value.length < 8) {
      setIsMobileMsg(false);
      setMobileMsg('ex) 12341234');
    } else {
      setIsMobileMsg(true);
      setMobileMsg('');
    }
    setSignupInfo({ ...signupInfo, [key]: only });
  };
  const inputValueId = (key) => (e) => {
    const { value } = e.target;
    const only = value.replace(
      /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g,
      ''
    );
    setSignupInfo({ ...signupInfo, [key]: only });
  };
  const inputValueEmail = (key) => (e) => {
    const emailReplace =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const email = e.target.value;

    setSignupInfo({ ...signupInfo, [key]: e.target.value });
    if (!emailReplace.test(email)) {
      setEmailMsg('이메일 형식이 틀렸습니다.');
      setIsEmailMsg(false);
    } else {
      setEmailMsg('');
      setIsEmailMsg(true);
    }
  };

  const handleAllCheck = () => {
    if (!isAge15 || !isTrms || !isInfo) {
      setIsAge15(true);
      setIsTrms(true);
      setIsInfo(true);
    } else {
      setIsAge15(false);
      setIsTrms(false);
      setIsInfo(false);
    }
  };
  const handleCheck = (value) => {
    if (value === 'age15') {
      setIsAge15(!isAge15);
    } else if (value === 'trems') {
      setIsTrms(!isTrms);
    } else {
      setIsInfo(!isInfo);
    }
  };

  //아이디 중복체크
  const handleIdCheck = () => {
    console.log(signupInfo.user_id);
    if (signupInfo.user_id) {
      axios
        .post(
          `${process.env.REACT_APP_SERVER_URI}signup/idCheck`,
          {
            user_id: signupInfo.user_id,
          },
          { headers: { 'Content-Type': 'application/json' } }
        )
        .then((res) => {
          setIsSignupModal(true);
          setIsIdCheck({
            isOverId: true,
            miniMsg: '사용 가능한 아이디 입니다.',
            isSingup: false,
          });
        })
        .catch((err) => {
          console.log(err, 'ID 중복체크 err');
          setIsSignupModal(true);
          setIsIdCheck({
            isOverId: false,
            miniMsg: '중복 아이디입니다.다시 입력해주세요.',
            isSingup: false,
          });
        });
    }
  };

  //회원가입 검증
  const handleSignupRequest = () => {
    if (
      !isPasswordMsg ||
      !isNameMsg ||
      !isMobileMsg ||
      !isEmailMsg ||
      !isAge15 ||
      !isTrms ||
      !isInfo
    ) {
      setIsSignupModal(true);
      setIsIdCheck({
        isOverId: false,
        miniMsg: '입력창 및 약관동의를 확인 해주세요.',
        isSingup: false,
      });
    } else if (!isIdCheck.isOverId) {
      setIsSignupModal(true);
      setIsIdCheck({
        isOverId: false,
        miniMsg: '아이디 중복체크를 완료 해주세요.',
        isSingup: false,
      });
    } else {
      axios
        .post(`${process.env.REACT_APP_SERVER_URI}signup`, signupInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          setIsSignupModal(true);
          setIsIdCheck({
            isOverId: true,
            miniMsg: '회원가입을 완료하였습니다. 로그인을 해주세요.',
            isSingup: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const [isSignupModal, setIsSignupModal] = useState(false);
  const signupRequestModal = () => {
    if (isIdCheck.isSingup) {
      openModal(true);
      setIsSignupModal(!isSignupModal);
    } else {
      setIsSignupModal(!isSignupModal);
    }
  };
  return (
    <SignupBack>
      <div style={{ fontSize: '20px', marginTop: '10px' }}>회원가입</div>
      <InputRelative className="idInput">
        <FaUserAlt />
        <SignupInput
          type="id"
          className="idInput"
          placeholder="아이디"
          value={signupInfo.user_id}
          onChange={inputValueId('user_id')}
        />
        <SignupIdOverlapBtn onClick={handleIdCheck}>
          중복 확인
        </SignupIdOverlapBtn>
      </InputRelative>
      <InputRelative>
        <FaLock />
        <SignupInput
          type="password"
          placeholder="비밀번호"
          value={signupInfo.password}
          onChange={inputValuePasswordC('password')}
        />
      </InputRelative>
      <InputRelative>
        <FaLock />
        <SignupInput
          type="password"
          placeholder="비밀번호 확인"
          value={signupInfo.passwordConfirm}
          onChange={inputValuePasswordC('passwordConfirm')}
        />
      </InputRelative>
      <Msg className={isPasswordMsg ? '' : 'faileMsg'}>{PasswordMsg}</Msg>
      <InputRelative>
        <FaUserTag size={18} />
        <SignupInput
          type="text"
          value={signupInfo.nickname}
          placeholder="닉네임"
          maxLength="10"
          onChange={inputValueName('nickname')}
        />
      </InputRelative>
      <Msg className={isNameMsg ? '' : 'faileMsg'}>{nameMsg}</Msg>

      <MobileBox>
        <FaMobileAlt size={18} />
        <input className="header" type="text" placeholder="010" disabled />

        <input
          className="mobilebody"
          maxLength="8"
          type="text"
          placeholder="핸드폰 번호"
          value={signupInfo.mobile}
          onChange={inputValueMobile('mobile')}
        />
      </MobileBox>

      <Msg className={isMobileMsg ? '' : 'faileMsg'}>{mobileMsg}</Msg>
      <InputRelative>
        <FaAt />
        <SignupInput
          type="email"
          placeholder="이메일"
          value={signupInfo.email}
          onChange={inputValueEmail('email')}
        />
      </InputRelative>
      <Msg className={isEmailMsg ? '' : 'faileMsg'}>{emailMsg}</Msg>
      <CheckTerms>
        <div style={{ fontSize: '15px' }}>약관동의</div>
        <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
          <input type="checkbox" onClick={() => handleAllCheck()} />
          <div style={{ fontSize: '12px', marginBottom: '2px' }}>
            [전체동의]
          </div>
        </div>
        <hr />
        <div style={{ marginLeft: '10px' }}>
          <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              onChange={() => handleCheck('age15')}
              style={{ marginBottom: '2px' }}
              checked={isAge15}
            />
            <span>만 15세 이상(필수)</span>
          </div>
          <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={isTrms}
              onChange={() => handleCheck('trems')}
            />
            <span>서비스 이용약관에 동의(필수)</span>
          </div>
          <div style={{ margin: '5px', display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              checked={isInfo}
              onChange={() => handleCheck('info')}
            />
            <span>개인정보 수집에 동의(필수)</span>
          </div>
        </div>
      </CheckTerms>
      <SignupBtn onClick={handleSignupRequest}>가입하기</SignupBtn>
      {isSignupModal && (
        <MiniBoxBack>
          <MiniBox>
            <MiniMsg>{isIdCheck.miniMsg}</MiniMsg>
            <MiniBtn onClick={signupRequestModal}>확인</MiniBtn>
          </MiniBox>
        </MiniBoxBack>
      )}
    </SignupBack>
  );
}

export default Signup;
