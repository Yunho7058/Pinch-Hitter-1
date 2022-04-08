import axios from 'axios';
import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CalendaMain } from '../Components/CreatePostComponents';

//! git 소대문자 인식하라는 설정
//https://papababo.tistory.com/entry/git-%EC%9D%80-%ED%8F%B4%EB%8D%94%ED%8C%8C%EC%9D%BC%EB%AA%85%EC%9D%98-%EB%8C%80%EC%86%8C%EB%AC%B8%EC%9E%90%EB%A5%BC-%EA%B0%9C%EB%AC%B4%EC%8B%9C%ED%95%9C%EB%8B%A4-%EA%B7%B8%EB%9F%BC-%EC%9A%B0%EC%A7%B8

export const PostBackground = styled.div`
  margin: 30px;
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1.2fr);
  grid-auto-rows: 24%;
  column-gap: 10px;
  row-gap: 20px;
`;

export const Post = styled.div`
  border-radius: 10px;
  padding: 10px;
  width: 260px;
  height: 350px;
  margin: 15px;
  border: 1px solid #ffc0cb;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  transition: 600ms;
  &:hover {
    transform: translate(0px, -20px);
    transition: 600ms;
  }
`;

export const PostContents = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  margin-bottom: 10px;
  border: 1px solid rgb(0, 0, 0);
`;

export const FilterBack = styled.div`
  width: 95vw;
  position: relative;
  border: 1px solid rgba(70, 130, 180, 0.2);

  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  min-width: 500px;

  &.on {
    overflow: hidden;
    transition: 1s;
    height: 480px;
  }
  &.off {
    border: 0px solid rgba(0, 0, 0, 0.3);
    overflow: hidden;
    height: 0px;
    transition: 1s;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;

export const Line = styled.div`
  border: 0.9px solid rgba(0, 0, 0, 0.5);
  height: 250px;
`;
export const FilterList = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const FilterTitle = styled.div``;
export const FilterElementList = styled.div`
  height: 280px;
  width: 120px;
  display: flex;
  flex-direction: column;

  justify-content: center;
`;
export const FilterSearchBtn = styled.button``;

export const MainPosts = ({ setCurrentPost }) => {
  // 함수, 직종 = 맞는 직종 이미지
  // 게시판아이디 직종 제목
  let local = window.localStorage;
  const navigate = useNavigate();
  const handlePost = (post) => {
    console.log('게시물 눌렀음');
    setCurrentPost(post);
    navigate('/readpost');
  };

  const [isFilterBox, setIsFilterBox] = useState(false);
  const handleFilterBoxBtn = () => {
    setIsFilterBox(!isFilterBox);
  };
  // const dumy = [
  //   {
  //     id: 0,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "패스트푸드점",
  //     wage: "10,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강북",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 1,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "패스트푸드점",
  //     wage: "10,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강서",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 2,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "주유소",
  //     wage: "12,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강남",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 3,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "운전",
  //     wage: "10,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강동",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 4,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "편의점",
  //     wage: "10,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강서",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 5,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "패스트푸드점",
  //     wage: "20,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강남",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 6,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "카페",
  //     wage: "15,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강남",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 7,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "일반식당",
  //     wage: "10,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강서",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 8,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "마트",
  //     wage: "20,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강남",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  //   {
  //     id: 9,
  //     user_id: 11,
  //     nickname: "김코딩",
  //     title: "테스트 제목입니다",
  //     occupation: "주유소",
  //     wage: "15,000 원이상",
  //     work_date: "2022-04-14",
  //     work_place: "강남",
  //     content: "테스트 내용입니다",
  //     createdAt: "2022-03-03",
  //   },
  // ];
  const list = {
    occupation: [
      '카페',
      '편의점',
      '일반식당',
      '마트',
      '패스트푸드점',
      '운전',
      '전단지',
      '주유소',
    ],
    wage: [
      '9,160 원이상',
      '10,000 원이상',
      '12,000 원이상',
      '15,000 원이상',
      '20,000 원이상',
    ],
    work_place: ['강남', '강서', '강동', '강북'],
  };
  //전체 게시물 서버로부터 요청
  //state로 관리
  //일단 handleCheck 클릭 시 e.target.id 배열로 관리 (state로 관리?)
  //검색 버튼 클릭 시 객체안에있는 배열들 검색
  const [allPost, setAllPost] = useState('');
  const [filterPost, setFilterPost] = useState({
    occupation: [],
    wage: [],
    work_place: [],
    startDay: '',
    endDay: '',
  });
  //체크 박스 클릭시 필터요소 저장 함수
  const setFilter = (el, target) => {
    let copy = el;
    let idx = copy.indexOf(target.id);
    if (idx !== -1) {
      copy.splice(idx, 1);
    } else {
      copy.push(target.id);
    }
    setFilterPost({ ...filterPost, [target.value]: copy });
  };
  //체크 박스 클릭시 필터요소 저장
  const handleCheck = (e) => {
    if (e.target.value === 'occupation') {
      setFilter(filterPost.occupation, e.target);
    } else if (e.target.value === 'wage') {
      setFilter(filterPost.wage, e.target);
    } else if (e.target.value === 'work_place') {
      setFilter(filterPost.work_place, e.target);
    }
  };
  //데이타 비교를위한 숫자타입으로 변경
  const setWageNum = (str) => {
    //9,160 원이상(문자열) -> 9160(숫자) 변경 함수
    let split = str.split(' ')[0].split(',');
    return Number(split[0] + split[1]);
  };
  const handlePikerValue = (date) => {
    setFilterPost({ ...filterPost, startDay: date });
  };
  const handlePikerValue1 = (date) => {
    setFilterPost({ ...filterPost, endDay: date });
  };

  //! 필터 가져오기 기능
  useEffect(() => {
    if (local.getItem('occupation')) {
      let parser = local.getItem('occupation');
      let arr = JSON.parse(parser);
      arr.forEach((el) => filterPost.occupation.push(el));
    }
    if (local.getItem('wage')) {
      let parser = local.getItem('wage');
      let arr = JSON.parse(parser);
      arr.forEach((el) => filterPost.wage.push(el));
    }
    if (local.getItem('work_place')) {
      let parser = local.getItem('work_place');
      let arr = JSON.parse(parser);
      arr.forEach((el) => filterPost.work_place.push(el));
    }
  }, []);

  //!필터 기능
  useEffect(() => {
    let copy = [...allPost];
    let wageArr = [...filterPost.wage];

    //체크 시급 배열중 최소값 구하기
    let min = 0;
    for (let el of wageArr) {
      let arr = [];
      arr.push(setWageNum(el));
      min = Math.min(arr);
    }
    let filter = copy.filter((el) => {
      return (
        (!filterPost.occupation.length ||
          filterPost.occupation.includes(el.occupation)) &&
        (!filterPost.wage.length || min <= setWageNum(el.wage)) &&
        (!filterPost.work_place.length ||
          filterPost.work_place.includes(el.work_place)) &&
        (!filterPost.startDay ||
          !filterPost.endDay ||
          (filterPost.startDay <= new Date(`${el.work_date} 0:0`) &&
            filterPost.endDay >= new Date(`${el.work_date} 0:0`)))
      );
    });
    setAllPost([...filter]);
  }, [filterPost]);
  //  https://notefolio.net/heedesign/153651 여기 접속해보자
  //! 필터 저장 기능
  const filterMemory = () => {
    console.log('필터 기억 눌렀니?', filterPost);
    local.setItem('occupation', JSON.stringify(filterPost.occupation));
    local.setItem('wage', JSON.stringify(filterPost.wage));
    local.setItem('work_place', JSON.stringify(filterPost.work_place));
  };
  //! 초기화
  const filterRemove = () => {
    local.clear();
    setFilterPost({
      occupation: [],
      wage: [],
      work_place: [],
      startDay: '',
      endDay: '',
    });
  };
  //! 전체 게시물 요청
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URI}boards`, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data.boardList);
        setAllPost(res.data.boardList);
        //res.data.data -> state 담기
      })
      .catch((err) => {
        console.log(err, '전체 게시물 불러오기 err');
      });
  }, []);

  return (
    <div
      style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
    >
      <FilterBack className={isFilterBox ? 'on' : 'off'}>
        <FilterList>
          <FilterTitle>직종</FilterTitle>
          <FilterElementList>
            {list.occupation.map((el) => (
              <div key={el.id}>
                <input
                  type="checkbox"
                  id={el}
                  onChange={handleCheck}
                  value="occupation"
                  checked={filterPost.occupation.includes(el)}
                ></input>
                <label for={el}>{el}</label>
              </div>
            ))}
          </FilterElementList>
        </FilterList>
        <Line />
        <FilterList>
          <FilterTitle>시급</FilterTitle>
          <FilterElementList>
            {list.wage.map((el) => (
              <div key={el.id}>
                <input
                  type="checkbox"
                  id={el}
                  onChange={handleCheck}
                  value="wage"
                  checked={filterPost.wage.includes(el)}
                ></input>
                <label for={el}>{el}</label>
              </div>
            ))}
          </FilterElementList>
        </FilterList>
        <Line />
        <FilterList>
          <FilterTitle>위치</FilterTitle>
          <FilterElementList>
            {list.work_place.map((el) => (
              <div key={el.id}>
                <input
                  type="checkbox"
                  id={el}
                  onChange={handleCheck}
                  value="work_place"
                  checked={filterPost.work_place.includes(el)}
                ></input>
                <label for={el}>{el}</label>
              </div>
            ))}
          </FilterElementList>
        </FilterList>
        <Line />
        <FilterList>
          <FilterTitle>날짜</FilterTitle>
          <FilterElementList>
            <div
              style={{ display: 'flex', width: '130px', textAlign: 'center' }}
            >
              <CalendaMain
                className="main"
                name="startDate"
                onChange={handlePikerValue}
              ></CalendaMain>
              <div>부터</div>
            </div>
            <CalendaMain
              className="main"
              name="endDate"
              onChange={handlePikerValue1}
            ></CalendaMain>
          </FilterElementList>
        </FilterList>
        <div style={{ position: 'absolute', bottom: '5px', right: '30px' }}>
          <button
            onClick={() => {
              filterMemory();
            }}
          >
            필터 기억
          </button>
          <button
            onClick={() => {
              filterRemove();
            }}
          >
            초기화
          </button>
        </div>
      </FilterBack>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <button onClick={handleFilterBoxBtn}>버튼</button>
      </div>
      <PostBackground>
        {allPost.length
          ? allPost.map((post) => {
              return (
                <Post onClick={() => handlePost(post)} key={post.id}>
                  <img
                    className="work_img"
                    src={`img/img_work/${post.occupation}.jpeg`}
                  />
                  <PostContents>
                    <div>시급 : {post.wage}</div>
                    <div>직종 : {post.occupation}</div>
                    <div>위치 : {post.work_place}</div>
                    <div>내용 : {post.title}</div>
                  </PostContents>
                </Post>
              );
            })
          : '조건에 맞는 게시물이 없습니다. '}
      </PostBackground>
    </div>
  );
};
