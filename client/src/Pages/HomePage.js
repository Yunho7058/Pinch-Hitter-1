import { MainPosts } from './MainPost';
import Header from '../Components/Header';
import { useEffect } from 'react';
import axios from 'axios';

function HomePage({
  hadleLoginVerification,
  isLogin,
  setIsLogin,
  handleLogout,
  postClickNav,
  allPost,
  setAllPost,
  setCurrentPost,
  getUserInfo,
}) {
  return (
    <>
      <Header
        hadleLoginVerification={hadleLoginVerification}
        isLogin={isLogin}
        handleLogout={handleLogout}
        setIsLogin={setIsLogin}
        getUserInfo={getUserInfo}
      />
      <MainPosts allPost={allPost} setCurrentPost={setCurrentPost} />
    </>
  );
}

export default HomePage;
