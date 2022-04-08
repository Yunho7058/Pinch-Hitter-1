import { useState } from "react";
import styled from "styled-components";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import { RouteBtn } from "./RouteBtn";
import { BiLogIn } from "react-icons/bi";

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
export const ModalButton = styled.div`
  margin-right: 30px;
  margin-top: 13px;
  font-size: 17px;
  cursor: grab;
  width: 100px;
  height: 30px;
  position: relative;

  > svg {
    top: 4px;
    left: 8px;
    position: absolute;
  }
  &:hover {
    transform: scale(1.1);
  }
`;

//Login 모달창 open 시
export const ModalView = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  width: 350px;
  height: 320px;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  > span.close-modal {
    position: absolute;
    top: -40px;
    right: 5px;
    cursor: pointer;
    font-size: 30px;
    color: white;
  }

  > div.login {
    margin-top: 25px;
  }
`;

//Signup 모달창 open 시
export const ModalSignupView = styled.div`
  border-radius: 15px;
  background-color: #ffffff;
  width: 300px;
  height: 500px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  position: relative;

  > span.close-modal {
    z-index: 1000;
    cursor: pointer;
    font-size: 30px;
    color: white;
    position: absolute;
    top: -35px;
    right: 5px;
  }

  > div.login {
    margin-top: 25px;
  }
`;

export const Modal = ({ setIsLogin, isLogin }) => {
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
          <ModalButton>
            <BiLogIn size={18} />
            로그인
          </ModalButton>
          <ModalBack>
            <ModalSignupView>
              <span onClick={clickSignup} className="close-modal">
                &times;
              </span>
              <Signup openModal={openModal} setShowModal={setShowModal} />
            </ModalSignupView>
          </ModalBack>
        </SideBarModal>
      ) : (
        <SideBarModal>
          {isLogin ? (
            <RouteBtn setIsLogin={setIsLogin} />
          ) : (
            <ModalButton onClick={openModal}>
              <BiLogIn size={18} />
              로그인
            </ModalButton>
          )}

          {showModal === true && isLogin === false ? (
            <ModalBack onClick={openModal}>
              <ModalView onClick={(e) => e.stopPropagation()}>
                <span onClick={openModal} className="close-modal">
                  &times;
                </span>

                <Login
                  clickSignup={clickSignup}
                  setIsLogin={setIsLogin}
                  openModal={openModal}
                  setShowModal={setShowModal}
                />
              </ModalView>
            </ModalBack>
          ) : null}
        </SideBarModal>
      )}
    </>
  );
};
