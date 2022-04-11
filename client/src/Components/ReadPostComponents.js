import React, { useState } from 'react';
import styled from 'styled-components';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import { RouteBtn } from './RouteBtn';

export const TitleWrapper = styled.div`
  width: 90%;
  text-align: center;
  color: gray;
`;

export const IdDiv = styled.div`
  float: right;
`;

export const FixButton = styled.button`
  width: 10rem;
  text-align: center;
  background-color: white;
  color: black;
  padding: 1rem 3rem;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid #006fff;
  border-radius: 100px;
  cursor: pointer;
  float: left;
  &:hover {
    background-color: #006fff;
    color: white;
  }
`;

export const DeleteButton = styled.button`
  width: 10rem;
  text-align: center;
  background-color: white;
  color: black;
  padding: 1rem 3rem;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid orangered;
  border-radius: 100px;
  cursor: pointer;
  float: right;
  &:hover {
    background-color: orangered;
    color: white;
  }
`;

export const ButtonDiv = styled.div`
  width: 350px;
`;

export const ModalBack = styled.div`
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

export const SideBarModal = styled.div`
  text-align: center;
  margin: right;
`;
//모달 로그인 버튼
export const ModalButton = styled.button`
  width: 20rem;
  text-align: center;
  background-color: white;
  color: black;
  padding: 1rem 3rem;
  font-weight: bold;
  font-size: 20px;
  border: 2px solid #006fff;
  border-radius: 100px;
  cursor: pointer;
  &:hover {
    background-color: #006fff;
    color: white;
  }
`;

//Login 모달창 open 시
export const ModalView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  border-radius: 3px;
  background-color: #ffffff;
  width: 400px;
  height: 440px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  position: relative;

  > span.close-modal {
    position: absolute;
    top: 0px;
    right: 5px;
    cursor: pointer;
    font-size: 30px;
    color: rgb(150, 150, 150);
  }

  > div.login {
    margin-top: 25px;
  }
`;

//Signup 모달창 open 시
export const ModalSignupView = styled.div.attrs((props) => ({
  role: 'dialog',
}))`
  border-radius: 3px;
  background-color: #ffffff;
  width: 400px;
  height: 540px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  position: relative;

  > span.close-modal {
    position: absolute;
    top: 0px;
    right: 5px;
    cursor: pointer;
    font-size: 30px;
    color: rgb(150, 150, 150);
  }

  > div.login {
    margin-top: 25px;
  }
`;

export const RModal = (props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(!showModal);
    setIsModal(false);
  };

  const [isModal, setIsModal] = useState(false);

  const clickSignup = () => {
    setShowModal(false);
    setIsModal(!isModal);
  };

  return (
    <>
      {isModal ? (
        <SideBarModal>
          <ModalButton>로그인</ModalButton>
          <ModalBack>
            <ModalSignupView>
              <span onClick={clickSignup} className="close-modal">
                &times;
              </span>
              <Signup openModal={openModal} />
            </ModalSignupView>
          </ModalBack>
        </SideBarModal>
      ) : (
        <SideBarModal>
          {props.isLogin ? (
            <RouteBtn />
          ) : (
            <ModalButton onClick={openModal}>로그인하고 지원하기</ModalButton>
          )}

          {showModal === true && props.isLogin === false ? (
            <ModalBack onClick={openModal}>
              <ModalView onClick={(e) => e.stopPropagation()}>
                <span onClick={openModal} className="close-modal">
                  &times;
                </span>

                <Login
                  clickSignup={clickSignup}
                  hadleLoginVerification={props.hadleLoginVerification}
                />
              </ModalView>
            </ModalBack>
          ) : null}
        </SideBarModal>
      )}
    </>
  );
};
