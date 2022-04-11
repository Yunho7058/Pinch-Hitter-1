import { Modal } from './Modal';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

export const HeaderBack = styled.div`
  background-color: #d3dedc;
  width: 100vw;
  height: 50px;
  border-bottom: 1px solid rgb(212, 211, 211);
  box-shadow: 0px 0px 1px 0px #dadce0;
  display: flex;
  justify-content: space-between;
  min-width: 350px;
  > img {
    display: inline-block;
    width: 100px;
    height: 50px;
    cursor: pointer;
  }
`;

function Header({ setIsLogin, isLogin, getUserInfo }) {
  let navigate = useNavigate();

  function handleGoHom() {
    navigate('/');
  }

  useEffect(() => {
    if (window.localStorage.getItem('IsRefresh')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <div>
      <HeaderBack>
        <img src="img/pinchLog_remove.png" onClick={handleGoHom} />
        <Modal
          setIsLogin={setIsLogin}
          isLogin={isLogin}
          getUserInfo={getUserInfo}
        />
      </HeaderBack>
    </div>
  );
}

export default Header;
