import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OAuthGoogle({ setIsLogin, getUserInfo }) {
  const navigate = useNavigate();
  useEffect(() => {
    const url = new URL(window.location.href);
    const hash = url.hash;
    const code = hash.split('=')[1].split('&')[0];

    axios
      .post(
        `${process.env.REACT_APP_SERVER_URI}oauth/google`,
        { data: code },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        window.localStorage.setItem('IsRefresh', true);
        setIsLogin(true);
        getUserInfo();
        navigate('/');
      })
      .catch((err) => {
        console.log(err, '구글 로그인 err');
      });
  }, []);
  return <div>구글 로그인중</div>;
}

export default OAuthGoogle;
