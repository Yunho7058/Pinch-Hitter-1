import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from 'react-router-dom';
import {
  WrapperDiv,
  OuterDiv,
  TopDiv,
  TopIndexDiv,
  MyBoardsOuterDiv,
  MyBoardsTopDiv,
  MyBoardTitleTextDiv,
  MyBoardsIndexDiv,
  MyBoardsIndexFirstDiv,
  MyBoardsIndexSecondDiv,
  MyBoardsIndexThirdDiv,
  MyBoardsIndexFourthDiv,
  MyBoardsMainDiv,
  MyBoardsListDiv,
  MyApplyListDiv,
  MyBoardsListTitleDiv,
  MyBoardsListApplicantInfoDiv,
  MyBoardsListNicknameDiv,
  MyBoardsListMobileDiv,
  MyApplyListTitleDiv,
  MyApplyListWorkplaceDiv,
  MyApplyListWorkdateDiv,
  MyInformationOuterDiv,
  MyInformationTopDiv,
  MyInformationTopTextDiv,
  MyInformationListDiv,
  MyInformationIndexDiv,
  MyInformationInput,
  EditInput,
  MyInformationSideDiv,
  MyInformationBottomDiv,
  MyinformationBottomUpDiv,
  MyinformationBottomDownDiv,
  MyinformEditButton,
  MyinformEditCompleteButton,
  PasswordChangeButton,
  WithdrawalButton,
  ModalBackdrop,
  ModalView,
  ModalDiv,
  ModalSmallDiv,
  ModalIndexDiv,
  ModalInput,
  ModalMsgDiv,
  ModalButtonBoxDiv,
  CancelModalButton,
  CompleteModalButton,
  AlertModalView,
  AlertModalDiv,
  AlertModalButton,
  AlertModalButtonBoxDiv,
  CancelAlertModalButton,
  DeleteAlertModalButton,
} from '../Components/MypageComponents';

import Header from '../Components/Header';
// import { removeCookie } from '../components/Cookie';

let url = 'https://localhost:8080';

export const Mypage = (props) => {
  const navigate = useNavigate();

  const [inputNickname, setInputNickname] = useState(props.userInfo.nickname);
  const [inputMobile, setInputMobile] = useState(props.userInfo.mobile);
  const [inputCurrentPassword, setInputCurrentPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [inputNewPasswordConfirm, setInputNewPasswordConfirm] = useState('');
  const [validityCheck, setValidityCheck] = useState({
    isNewPassword: false,
    msgNewPassword: '비밀번호를 입력해주세요.',
    isNewPasswordConfirm: false,
    msgNewPasswordConfirm: '비밀번호를 재입력해주세요.',
  });
  const [passwordResponseMSG, setPasswordResponseMSG] = useState('');
  const [myBoardList, setMyBoardList] = useState([
    {
      id: 1,
      user_id: 1,
      nickname: 'kimcoding1',
      title: 'CU 대타구합니다',
      occupation: '편의점',
      wage: '10,000 원이상',
      work_date: '2022-01-03',
      work_place: '강북',
      content: '1월 1일 도봉구 쌍문동 Gs에서 9~18시까지 대타 구합니다',
      updatedAt: '2022-01-01',
      createdAt: '2022-01-01',
    },
    {
      id: 2,
      user_id: 1,
      nickname: 'kimcoding1',
      title: 'GS 대타구합니다',
      occupation: '편의점',
      wage: '10,000 원이상',
      work_date: '2022-01-03',
      work_place: '강북',
      content: '1월 1일 도봉구 쌍문동 Gs에서 9~18시까지 대타 구합니다',
      updatedAt: '2022-01-01',
      createdAt: '2022-01-01',
    },
    {
      id: 3,
      user_id: 1,
      nickname: 'kimcoding1',
      title: '세븐일레븐 대타구합니다',
      occupation: '편의점',
      wage: '10,000 원이상',
      work_date: '2022-01-03',
      work_place: '강북',
      content: '1월 1일 도봉구 쌍문동 Gs에서 9~18시까지 대타 구합니다',
      updatedAt: '2022-01-01',
      createdAt: '2022-01-01',
    },
  ]);
  const [myApplyBoardList, setMyApplyBoardList] = useState([
    {
      id: 4,
      user_id: 2,
      nickname: 'kimcoding2',
      title: 'CU 대타구합니다',
      occupation: '편의점',
      wage: '10,000 원이상',
      work_date: '2022-01-03',
      work_place: '강북',
      content: '1월 1일 도봉구 쌍문동 Gs에서 9~18시까지 대타 구합니다',
      updatedAt: '2022-01-01',
      createdAt: '2022-01-01',
    },
    {
      id: 5,
      user_id: 2,
      nickname: 'kimcoding2',
      title: 'GS 대타구합니다',
      occupation: '편의점',
      wage: '10,000 원이상',
      work_date: '2022-01-03',
      work_place: '강북',
      content: '1월 1일 도봉구 쌍문동 Gs에서 9~18시까지 대타 구합니다',
      updatedAt: '2022-01-01',
      createdAt: '2022-01-01',
    },
    {
      id: 6,
      user_id: 2,
      nickname: 'kimcoding2',
      title: '세븐일레븐 대타구합니다',
      occupation: '편의점',
      wage: '10,000 원이상',
      work_date: '2022-01-03',
      work_place: '강북',
      content: '1월 1일 도봉구 쌍문동 Gs에서 9~18시까지 대타 구합니다',
      updatedAt: '2022-01-01',
      createdAt: '2022-01-01',
    },
  ]);
  const [allApplicantList, setAllApplicantList] = useState([
    {
      id: 1,
      users_id: 1,
      boards_id: 1,
      user_id: 'kimcoding',
      nickname: '김코딩1',
      email: 'kimcoding1@naver.com',
      mobile: '01011111111',
    },
    {
      id: 1,
      users_id: 2,
      boards_id: 1,
      user_id: 'kimcoding',
      nickname: '김코딩2',
      email: 'kimcoding1@naver.com',
      mobile: '01022222222',
    },
    {
      id: 1,
      users_id: 3,
      boards_id: 1,
      user_id: 'kimcoding',
      nickname: '김코딩3',
      email: 'kimcoding1@naver.com',
      mobile: '01033333333',
    },
    {
      id: 1,
      users_id: 4,
      boards_id: 2,
      user_id: 'kimcoding',
      nickname: '김코딩4',
      email: 'kimcoding1@naver.com',
      mobile: '01044444444',
    },
    {
      id: 1,
      users_id: 5,
      boards_id: 3,
      user_id: 'kimcoding',
      nickname: '김코딩5',
      email: 'kimcoding1@naver.com',
      mobile: '01055555555',
    },
  ]);

  // 내가 쓴 게시물 리스트 불러오기
  useEffect(() => {
    console.log(props.userInfo);
    axios({
      url: `${process.env.REACT_APP_SERVER_URI}boards/${props.userInfo.id}`,
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        setMyBoardList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // // 내가 신청한 게시물 리스트 불러오기
  // useEffect(() => {
  //   axios({
  //     url: `${process.env.REACT_APP_SERVER_URI}applicants/${props.userInfo.id}`,
  //     method: 'get',
  //     headers: {
  //       // Authorization: `Bearer ${props.accessToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setMyApplyBoardList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // // 전체 신청자 리스트 불러오기
  // useEffect(() => {
  //   axios({
  //     url: `${process.env.REACT_APP_SERVER_URI}applicants`,
  //     method: 'get',
  //     headers: {
  //       // Authorization: `Bearer ${props.accessToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //     withCredentials: true,
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setAllApplicantList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // 닉네임 또는 모바일 input창 입력값 변경
  const handleInputValue = (e) => {
    console.log('닉네임 또는 모바일 Input창 입력값 변경');
    if (e.target.name === 'nickname') {
      setInputNickname(e.target.value);
    } else if (e.target.name === 'mobile') {
      setInputMobile(e.target.value);
    }
  };

  // 현재 비밀번호 input 입력값 변경에 따라 상태 변화
  const handleInputCurrentPassword = (e) => {
    setInputCurrentPassword(e.target.value);
  };

  // 새로운 비밀번호 input 입력값 변경에 따라 상태 변화
  const handleInputNewPassword = (e) => {
    console.log('새로운 비밀번호 입력중');
    let value = e.target.value;

    const passwordReplace =
      /^.*(?=.{8,})(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]).*$/;

    if (passwordReplace.test(value)) {
      setValidityCheck({
        ...validityCheck,
        isNewPassword: true,
        msgNewPassword: '사용 가능한 비밀번호입니다.',
      });
    } else if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isNewPassword: false,
        msgNewPassword: '비밀번호를 입력해주세요.',
      });
    } else {
      setValidityCheck({
        ...validityCheck,
        isNewPassword: false,
        msgNewPassword: '영문,숫자,특수문자를 혼합하여 8자 이상',
      });
    }
    setInputNewPassword(value);
  };

  // 새로운 비밀번호 확인 input 입력값 따라 상태 변화
  const handleInputNewPasswordConfirm = (e) => {
    let value = e.target.value;
    setInputNewPasswordConfirm(value);
  };

  // 비밀번호 일치성 체크
  const passwordConfirmCheck = (value) => {
    if (value.length === 0) {
      setValidityCheck({
        ...validityCheck,
        isNewPasswordConfirm: false,
        msgNewPasswordConfirm: '비밀번호를 재입력해주세요.',
      });
    } else if (
      inputNewPassword !== value ||
      inputNewPasswordConfirm !== value ||
      value.length === 0
    ) {
      setValidityCheck({
        ...validityCheck,
        isNewPasswordConfirm: false,
        msgNewPasswordConfirm: '비밀번호가 일치하지 않습니다.',
      });
    } else if (
      inputNewPassword === value &&
      inputNewPasswordConfirm === value
    ) {
      setValidityCheck({
        ...validityCheck,
        isNewPasswordConfirm: true,
        msgNewPasswordConfirm: '비밀번호가 일치합니다.',
      });
    }
  };

  // 비밀번호 입력시 마다 일치성 체크
  useEffect(() => {
    passwordConfirmCheck(inputNewPassword);
  }, [inputNewPassword]);

  useEffect(() => {
    passwordConfirmCheck(inputNewPasswordConfirm);
  }, [inputNewPasswordConfirm]);

  // 닉네임 수정 input창 상태관리
  const [isNicknameInputOpen, setIsNicknameInputOpen] = useState(false);

  // 모바일 수정 input창 상태관리
  const [isMobileInputOpen, setIsMobileInputOpen] = useState(false);

  // 닉네임 또는 모바일 수정 입력값 누락 알림 모달창 상태관리
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  // 비밀번호 변경 모달창 상태관리
  const [isChangePasswordModalOpen, setIsChangePasswordModalOpen] =
    useState(false);

  // 회원탈퇴 확인 알람 모달창 상태관리
  const [isWithdrawalAlertModalOpen, setIsWithdrawalAlertModalOpen] =
    useState(false);

  // 닉네임 수정 input창 상태 변경
  const openNicknameInputHandler = () => {
    console.log('닉네임 수정 input창 상태 변경');
    setIsNicknameInputOpen(!isNicknameInputOpen);
  };

  // 모바일 수정 input창 상태 변경
  const openMobileInputHandler = () => {
    console.log('모바일 수정 input창 상태 변경');
    setIsMobileInputOpen(!isMobileInputOpen);
  };

  // 닉네임 입력값 누락 알림 모달창 상태 변경
  const openAlertModalHandler = () => {
    console.log('닉네임 입력값 누락 알림 모달창 상태 변경');
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  // 비밀번호 변경 모달창 상태 변경
  const openChangePasswordModalHandler = () => {
    console.log('비밀번호 변경 모달창 상태 변경');
    setIsChangePasswordModalOpen(!isChangePasswordModalOpen);
  };

  // 회원탈퇴 확인 알림 모달창 상태 변경
  const openWithdrawalAlertModalHandler = () => {
    console.log('회원탈퇴 확인 모달창 상태 변경');
    setIsWithdrawalAlertModalOpen(!isWithdrawalAlertModalOpen);
  };

  // 내가 쓴 게시물 클릭
  const onClickMyBoard = (board) => {
    console.log('내가 쓴 제목 클릭');
    console.log(board);
    // localStorage.setItem('currentPost', JSON.stringify(post));
    props.setCurrentPost(board);
    navigate('/readpost');
  };

  // 내가 신청한 게시물 클릭
  const onClickMyApplyBoard = (board) => {
    console.log('내가 신청한 게시물 클릭');

    axios({
      url: `${process.env.REACT_APP_SERVER_URI}boards/${board.id}`,
      method: 'get',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('신청한 게시물의 정보를 불러옴');
        console.log(res.data);
        // localStorage.setItem(
        //   'currentPost',
        //   JSON.stringify(res.data.commentedPost)
        // );
        props.setCurrentPost(res.data);
        navigate('/readpost');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 닉네임 변경 PATCH 요청
  const editNicknameComplete = () => {
    console.log('닉네임 수정완료 버튼 클릭');

    if (inputNickname.length > 0) {
      axios({
        url: `${process.env.REACT_APP_SERVER_URI}nickname`,
        method: 'patch',
        headers: {
          // Authorization: `Bearer ${props.accessToken}`,
          'Content-Type': 'application/json',
        },
        data: { nickname: inputNickname },
        withCredentials: true,
      })
        .then((res) => {
          //! 닉네임 수정시에도 서버에서 중복확인을 할텐데
          //! 중복된 닉네임일때는 또 알림 모달창을 띄워 줘야됨.
          console.log('닉네임 수정 완료');
          console.log(res);
          openNicknameInputHandler();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('수정될 닉네임이 입력되지 않음');
      openAlertModalHandler();
    }
  };

  // 모바일 변경 PATCH 요청
  const editMobileComplete = () => {
    console.log('닉네임 수정완료 버튼 클릭');

    if (inputMobile.length > 0) {
      axios({
        url: `${process.env.REACT_APP_SERVER_URI}mobile`,
        method: 'patch',
        headers: {
          // Authorization: `Bearer ${props.accessToken}`,
          'Content-Type': 'application/json',
        },
        data: { mobile: inputMobile },
        withCredentials: true,
      })
        .then((res) => {
          //! 닉네임 수정시에도 서버에서 중복확인을 할텐데
          //! 중복된 닉네임일때는 또 알림 모달창을 띄워 줘야됨.
          console.log('닉네임 수정 완료');
          console.log(res);
          openNicknameInputHandler();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log('수정될 닉네임이 입력되지 않음');
      openAlertModalHandler();
    }
  };

  // 비밀번호 변경 PATCH 요청
  const onClickChangePasswordButton = () => {
    console.log('비밀번호 변경 완료 버튼 클릭');

    axios({
      url: `${process.env.REACT_APP_SERVER_URI}password`,
      method: 'patch',
      headers: {
        // Authorization: `Bearer ${props.accessToken}`,
        'Content-Type': 'application/json',
      },
      data: {
        password: inputCurrentPassword,
        new_password: inputNewPasswordConfirm,
      },
      withCredentials: true,
    })
      .then((res) => {
        console.log('비밀번호 변경하고 응답 옴');
        console.log(res);
        openChangePasswordModalHandler();
        navigate('/mypage');
      })
      .catch((err) => {
        setPasswordResponseMSG('현재 비밀번호를 올바르게 입력해주세요.');
        console.log(err);
      });
  };

  // 회원탈퇴 DELETE 요청
  const onClickWithdrawalButton = () => {
    console.log('탈퇴확인 모달창에서 탈퇴버튼 눌림');

    axios({
      url: `${process.env.REACT_APP_SERVER_URI}signout`,
      method: 'delete',
      withCredentials: true,
    })
      .then((res) => {
        console.log('회원탈퇴 요청에 대한 응답이 옴');
        console.log(res);
        openWithdrawalAlertModalHandler();
        props.setIsLoginCheck(false);
        // removeCookie('accessToken');
        navigate('/main');
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isAlertModalOpen === true ? (
        <ModalBackdrop>
          <AlertModalView>
            <AlertModalDiv>수정할 내용을 입력해주세요!</AlertModalDiv>
            <AlertModalButton onClick={openAlertModalHandler}>
              확인
            </AlertModalButton>
          </AlertModalView>
        </ModalBackdrop>
      ) : null}

      {isChangePasswordModalOpen === true ? (
        <ModalBackdrop>
          <ModalView>
            <ModalDiv>
              <ModalIndexDiv>현재 비밀번호</ModalIndexDiv>
            </ModalDiv>
            <ModalDiv>
              <ModalInput
                type="password"
                onChange={handleInputCurrentPassword}
                value={inputCurrentPassword}
              ></ModalInput>
            </ModalDiv>
            <ModalSmallDiv>
              <ModalMsgDiv className={'red'}>{passwordResponseMSG}</ModalMsgDiv>
            </ModalSmallDiv>
            <ModalDiv>
              <ModalIndexDiv>새로운 비밀번호</ModalIndexDiv>
            </ModalDiv>
            <ModalDiv>
              <ModalInput
                type="password"
                onChange={handleInputNewPassword}
              ></ModalInput>
            </ModalDiv>
            <ModalSmallDiv>
              <ModalMsgDiv
                className={
                  validityCheck.isNewPassword
                    ? 'green'
                    : inputNewPassword.length <= 0
                    ? ''
                    : 'red'
                }
              >
                {validityCheck.msgNewPassword}
              </ModalMsgDiv>
            </ModalSmallDiv>
            <ModalDiv>
              <ModalIndexDiv>새로운 비밀번호 확인</ModalIndexDiv>
            </ModalDiv>
            <ModalDiv>
              <ModalInput
                type="password"
                onChange={handleInputNewPasswordConfirm}
              ></ModalInput>
            </ModalDiv>
            <ModalSmallDiv>
              <ModalMsgDiv
                className={
                  validityCheck.isNewPasswordConfirm
                    ? 'green'
                    : inputNewPasswordConfirm.length <= 0
                    ? ''
                    : 'red'
                }
              >
                {validityCheck.msgNewPasswordConfirm}
              </ModalMsgDiv>
            </ModalSmallDiv>
            <ModalSmallDiv></ModalSmallDiv>
            <ModalSmallDiv></ModalSmallDiv>
            <ModalButtonBoxDiv>
              <CancelModalButton onClick={openChangePasswordModalHandler}>
                취소
              </CancelModalButton>
              <CompleteModalButton
                onClick={onClickChangePasswordButton}
                disabled={
                  !validityCheck.isNewPasswordConfirm ||
                  inputCurrentPassword.length < 8
                }
              >
                완료
              </CompleteModalButton>
            </ModalButtonBoxDiv>
            <ModalSmallDiv></ModalSmallDiv>
          </ModalView>
        </ModalBackdrop>
      ) : null}

      {isWithdrawalAlertModalOpen === true ? (
        <ModalBackdrop>
          <AlertModalView>
            <AlertModalDiv>정말 회원탈퇴를 하시겠어요?</AlertModalDiv>
            <AlertModalButtonBoxDiv>
              <CancelAlertModalButton onClick={openWithdrawalAlertModalHandler}>
                취소
              </CancelAlertModalButton>
              <DeleteAlertModalButton onClick={onClickWithdrawalButton}>
                탈퇴
              </DeleteAlertModalButton>
            </AlertModalButtonBoxDiv>
          </AlertModalView>
        </ModalBackdrop>
      ) : null}

      <Header
        hadleLoginVerification={props.hadleLoginVerification}
        isLogin={props.isLogin}
        setIsLogin={props.setIsLogin}
      />
      <WrapperDiv>
        <OuterDiv>
          <TopDiv>
            <TopIndexDiv>김코딩님의 마이페이지</TopIndexDiv>
          </TopDiv>
          <MyBoardsOuterDiv>
            <MyBoardsTopDiv>
              <MyBoardTitleTextDiv>
                내 게시글 {myBoardList.length}개
              </MyBoardTitleTextDiv>
            </MyBoardsTopDiv>
            <MyBoardsIndexDiv>
              <MyBoardsIndexFirstDiv>제목</MyBoardsIndexFirstDiv>
              <MyBoardsIndexSecondDiv>신청자 닉네임</MyBoardsIndexSecondDiv>
              <MyBoardsIndexThirdDiv>신청자 연락처</MyBoardsIndexThirdDiv>
              <MyBoardsIndexFourthDiv></MyBoardsIndexFourthDiv>
            </MyBoardsIndexDiv>
            {/* <MyBoardsMainDiv>
              {myBoardList.map((board) => {
                let applicantList = allApplicantList.filter((applicant) => {
                  return applicant.boards_id === board.id;
                });

                return (
                  <MyBoardsListDiv onClick={() => onClickMyBoard(board)}>
                    <MyBoardsListTitleDiv>{board.title}</MyBoardsListTitleDiv>
                    <MyBoardsListApplicantInfoDiv>
                      {applicantList.map((applicant) => {
                        return (
                          <>
                            <MyBoardsListNicknameDiv>
                              {applicant.nickname}
                            </MyBoardsListNicknameDiv>
                            <MyBoardsListMobileDiv>
                              {applicant.mobile}
                            </MyBoardsListMobileDiv>
                          </>
                        );
                      })}
                    </MyBoardsListApplicantInfoDiv>
                  </MyBoardsListDiv>
                );
              })}
            </MyBoardsMainDiv> */}
          </MyBoardsOuterDiv>
          <MyBoardsOuterDiv>
            <MyBoardsTopDiv>
              <MyBoardTitleTextDiv>
                내 신청글 {myApplyBoardList.length}개
              </MyBoardTitleTextDiv>
            </MyBoardsTopDiv>
            <MyBoardsIndexDiv>
              <MyBoardsIndexFirstDiv>제목</MyBoardsIndexFirstDiv>
              <MyBoardsIndexSecondDiv>지역</MyBoardsIndexSecondDiv>
              <MyBoardsIndexThirdDiv>대타 날짜</MyBoardsIndexThirdDiv>
              <MyBoardsIndexFourthDiv></MyBoardsIndexFourthDiv>
            </MyBoardsIndexDiv>
            <MyBoardsMainDiv>
              {myApplyBoardList.map((board) => {
                return (
                  <MyApplyListDiv onClick={() => onClickMyApplyBoard(board)}>
                    <MyApplyListTitleDiv>{board.title}</MyApplyListTitleDiv>
                    <MyApplyListWorkplaceDiv>
                      {board.work_place}
                    </MyApplyListWorkplaceDiv>
                    <MyApplyListWorkdateDiv>
                      {board.work_date}
                    </MyApplyListWorkdateDiv>
                  </MyApplyListDiv>
                );
              })}
            </MyBoardsMainDiv>
          </MyBoardsOuterDiv>
          <MyInformationOuterDiv>
            <MyInformationTopDiv>
              <MyInformationTopTextDiv>회원정보</MyInformationTopTextDiv>
            </MyInformationTopDiv>
            <MyInformationListDiv>
              <MyInformationIndexDiv>아이디</MyInformationIndexDiv>
              <MyInformationInput
                value={props.userInfo.user_id}
                readOnly
              ></MyInformationInput>
              <MyInformationSideDiv></MyInformationSideDiv>
            </MyInformationListDiv>
            <MyInformationListDiv>
              <MyInformationIndexDiv>닉네임</MyInformationIndexDiv>
              {isNicknameInputOpen === true ? (
                <EditInput
                  name="nickname"
                  type="text"
                  value={inputNickname}
                  onChange={handleInputValue}
                  placeholder="수정할 닉네임"
                ></EditInput>
              ) : (
                <MyInformationInput
                  name="nickname"
                  type="text"
                  value={props.userInfo.nickname}
                  onChange={handleInputValue}
                  readOnly
                ></MyInformationInput>
              )}
              <MyInformationSideDiv>
                {isNicknameInputOpen === true ? (
                  <MyinformEditCompleteButton onClick={editNicknameComplete}>
                    수정 완료
                  </MyinformEditCompleteButton>
                ) : (
                  <MyinformEditButton onClick={openNicknameInputHandler}>
                    수정
                  </MyinformEditButton>
                )}
              </MyInformationSideDiv>
            </MyInformationListDiv>
            <MyInformationListDiv>
              <MyInformationIndexDiv>이메일</MyInformationIndexDiv>
              <MyInformationInput
                value={props.userInfo.email}
                readOnly
              ></MyInformationInput>
              <MyInformationSideDiv></MyInformationSideDiv>
            </MyInformationListDiv>
            <MyInformationListDiv>
              <MyInformationIndexDiv>연락처</MyInformationIndexDiv>
              {isMobileInputOpen === true ? (
                <EditInput
                  name="mobile"
                  type="number"
                  value={inputMobile}
                  onChange={handleInputValue}
                  placeholder="수정할 연락처"
                ></EditInput>
              ) : (
                <MyInformationInput
                  value={props.userInfo.mobile}
                  name="mobile"
                  readOnly
                ></MyInformationInput>
              )}
              <MyInformationSideDiv>
                {isMobileInputOpen === true ? (
                  <MyinformEditCompleteButton onClick={editMobileComplete}>
                    수정 완료
                  </MyinformEditCompleteButton>
                ) : (
                  <MyinformEditButton onClick={openMobileInputHandler}>
                    수정
                  </MyinformEditButton>
                )}
              </MyInformationSideDiv>
            </MyInformationListDiv>
            <MyInformationBottomDiv>
              <MyinformationBottomUpDiv>
                <PasswordChangeButton onClick={openChangePasswordModalHandler}>
                  비밀번호 수정
                </PasswordChangeButton>
              </MyinformationBottomUpDiv>
              <MyinformationBottomDownDiv>
                <WithdrawalButton onClick={openWithdrawalAlertModalHandler}>
                  회원탈퇴
                </WithdrawalButton>
              </MyinformationBottomDownDiv>
            </MyInformationBottomDiv>
          </MyInformationOuterDiv>
        </OuterDiv>
      </WrapperDiv>
    </>
  );
};

export default Mypage;
