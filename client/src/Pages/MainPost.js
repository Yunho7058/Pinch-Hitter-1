import axios from 'axios';
import { useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CalendaMain } from '../Components/CreatePostComponents';

export const PostBackground = styled.div`
  margin: 30px;
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
`;

export const Post = styled.div`
  border-radius: 20px;
  background-color: white;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
  padding: 20px;
  width: 200px;
  height: 250px;
  margin: 15px;
  align-items: center;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  transition: 600ms;
  cursor: pointer;
  &:hover {
    transform: translate(0px, -10px);
    transition: 600ms;
  }
  > img {
    width: 100%;
    height: 50%;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const PostContents = styled.div`
  width: 92%;
  height: 40%;
  padding: 10px;
  font-size: 15px;
  border-radius: 10px;
  background-color: white;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid rgb(0, 0, 0, 0.1);
`;

export const FilterBack = styled.div`
  width: 100vw;
  position: relative;
  border: 1px solid rgba(70, 130, 180, 0.2);
  border-top: 0px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: 500px;
  &.on {
    overflow: hidden;

    height: 480px;
  }
  &.off {
    border: 0px solid rgba(0, 0, 0, 0.3);
    overflow: hidden;
    height: 0px;

    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
export const FliterBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Line = styled.div`
  border-left: 0.9px dashed rgba(0, 0, 0, 0.8);
  height: 250px;
`;
export const FilterList = styled.div`
  display: flex;
  height: 300px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  &.calenda {
    height: 100px;
    flex-direction: row;
    justify-content: center;
  }
`;
export const FilterTitle = styled.div`
  font-size: 18px;
  &.day {
    position: absolute;
    left: -40px;
    top: 28px;
  }
`;
export const FilterElementList = styled.div`
  height: 280px;
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.calenda {
    position: relative;
    height: 100px;
    width: 320px;
    min-width: 320px;
    flex-direction: row;
    align-items: center;
    justify-items: center;
  }
`;
export const FilterSearchBtn = styled.div`
  width: 200px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(211, 222, 215);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
`;
export const InputBox = styled.input`
  border: none;
`;
export const InitializeBtnBack = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 30px;
`;
export const InitializeBtn = styled.div`
  cursor: pointer;
  line-height: 30px;
  text-align: center;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 80px;
  font-size: 13px;
  height: 30px;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px #dadce0;
  &:active {
    box-shadow: 1px 1px 1px 0px #dadce0;
    position: relative;
    right: -1px;
    top: 1px;
  }
`;

export const MainPosts = ({ setCurrentPost }) => {
  const navigate = useNavigate();
  const handlePost = (post) => {
    setCurrentPost(post);
    navigate('/readpost');
  };

  const [isFilterBox, setIsFilterBox] = useState(false);
  const handleFilterBoxBtn = () => {
    setIsFilterBox(!isFilterBox);
  };
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

  const [allPost, setAllPost] = useState('');
  const [allPostCopy, setAllPostCopy] = useState('');
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

    let split = str.split('원')[0].split(',');
    return Number(split[0] + split[1]);
  };
  const handlePikerValue = (date) => {
    setFilterPost({ ...filterPost, startDay: date });
  };
  const handlePikerValue1 = (date) => {
    setFilterPost({ ...filterPost, endDay: date });
  };

  //!필터 기능
  useEffect(() => {
    let copy = [...allPostCopy];
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

  //! 초기화
  const filterRemove = () => {
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
        setAllPost(res.data.boardList);
        setAllPostCopy(res.data.boardList);
      })
      .catch((err) => {
        console.log(err, '전체 게시물 불러오기 err');
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'whitesmoke',
      }}
    >
      <FilterBack className={isFilterBox ? 'on' : 'off'}>
        <div>
          <FilterList className="calenda">
            <FilterElementList className="calenda">
              <FilterTitle className="day">날짜</FilterTitle>
              <CalendaMain
                className="main"
                name="startDate"
                onChange={handlePikerValue}
              ></CalendaMain>
              <div
                style={{ position: 'absolute', top: '29px', right: '165px' }}
              >
                ~
              </div>
              <CalendaMain
                className="main"
                name="endDate"
                onChange={handlePikerValue1}
              ></CalendaMain>
            </FilterElementList>
          </FilterList>
        </div>
        <FliterBody>
          <FilterList>
            <FilterTitle>직종</FilterTitle>
            <FilterElementList>
              {list.occupation.map((el, idx) => (
                <div key={idx} style={{ marginBottom: '7px' }}>
                  <InputBox
                    type="checkbox"
                    id={el}
                    onChange={handleCheck}
                    value="occupation"
                    checked={filterPost.occupation.includes(el)}
                  ></InputBox>
                  <label htmlFor={el}>{el}</label>
                </div>
              ))}
            </FilterElementList>
          </FilterList>
          <Line />
          <FilterList>
            <FilterTitle>시급</FilterTitle>
            <FilterElementList>
              {list.wage.map((el, idx) => (
                <div key={idx} style={{ marginBottom: '10px' }}>
                  <input
                    type="checkbox"
                    id={el}
                    onChange={handleCheck}
                    value="wage"
                    checked={filterPost.wage.includes(el)}
                  ></input>
                  <label htmlFor={el}>{el}</label>
                </div>
              ))}
            </FilterElementList>
          </FilterList>
          <Line />
          <FilterList>
            <FilterTitle>위치</FilterTitle>
            <FilterElementList>
              {list.work_place.map((el, idx) => (
                <div key={idx} style={{ marginBottom: '12px' }}>
                  <input
                    type="checkbox"
                    id={el}
                    onChange={handleCheck}
                    value="work_place"
                    checked={filterPost.work_place.includes(el)}
                  ></input>
                  <label htmlFor={el}>{el}</label>
                </div>
              ))}
            </FilterElementList>
          </FilterList>
        </FliterBody>
        <InitializeBtnBack>
          <InitializeBtn
            onClick={() => {
              filterRemove();
            }}
          >
            초기화
          </InitializeBtn>
        </InitializeBtnBack>
      </FilterBack>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <FilterSearchBtn onClick={handleFilterBoxBtn}>
          <div>{isFilterBox ? '접기' : '검색'}</div>

          {isFilterBox ? (
            <AiFillCaretUp size={20} />
          ) : (
            <AiFillCaretDown size={20} />
          )}
        </FilterSearchBtn>
      </div>
      <PostBackground>
        {allPost.length
          ? allPost.map((post) => {
              return (
                <Post onClick={() => handlePost(post)} key={post.id}>
                  <img src={`img/img_work/${post.occupation}.jpeg`} />
                  <PostContents>
                    <div>시급 : {post.wage}</div>
                    <div>직종 : {post.occupation}</div>
                    <div>위치 : {post.work_place}</div>
                    <div>
                      내용 :{' '}
                      {post.title.length < 13
                        ? post.title
                        : `${post.title.slice(0, 10)}...`}
                    </div>
                  </PostContents>
                </Post>
              );
            })
          : '조건에 맞는 게시물이 없습니다. '}
      </PostBackground>
    </div>
  );
};
