import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // 날짜선택 라이브러리
import 'react-datepicker/dist/react-datepicker.css'; // 달력CSS
import { ko } from 'date-fns/esm/locale'; // 달력 한글 표시
import styled from 'styled-components';

// CreatPost.js 파일의 Styled Component 모음
export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  background-color: whitesmoke;
  width: 100%;
  height: 100vh;
  @media screen and (max-width: 1080px) {
    width: 100%;
    height: 100%;
  }
`;

export const Head = styled.h1`
  background-color: black;
  text-align: center;
  color: white;
  width: 100%;
  height: 10vh;
  margin-top: 0;
`;

export const Body = styled.body`
  padding: 0.5rem, 1rem, 1rem, 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 80%;
  height: 90vh;
  @media screen and (max-width: 1080px) {
    width: 80%;
    height: 80%;
  }
`;

export const SectorWrapper = styled.div`
  width: 30rem;
  margin-top: 1.5rem;
`;

export const TitleDiv = styled.div`
  font-weight: bold;
  font-size: 30px;
  color: black;
  margin-top: 1rem;
`;

export const TitleInput = styled.input`
  margin-bottom: 1rem;
  width: 98.5%;
  height: 50px;
  text-align: center;
  font-size: 20px;
  color: #006fff;
  border: 1px solid #006fff;
  border-radius: 3px;
`;

// 앞에 'R' 붙은 컴포넌트는 ReadPost.js 를 위한 CSS
export const RTitleInput = styled.input`
  margin-bottom: 1rem;
  width: 98.5%;
  height: 50px;
  text-align: left;
  font-size: 20px;
  color: black;
  border: 1px solid white;
  border-bottom: 1px solid gray;
  border-radius: 3px;
`;

export const IndexDiv = styled.div`
  width: 40rem;
  font-weight: bold;
  font-size: 20px;
  padding-left: 0.2rem;
`;

export const ContentTextarea = styled.textarea`
  width: 40rem;
  height: 20rem;
  padding-top: 10px;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 1rem;
  font-size: 20px;
  color: #006fff;
  border: 1px solid #006fff;
  border-radius: 3px;
  text-align: center;
`;

export const RContentTextarea = styled.textarea`
  width: 40rem;
  height: 20rem;
  padding-top: 10px;
  padding-left: 10px;
  margin-top: 5px;
  margin-bottom: 1rem;
  font-size: 20px;
  color: black;
  border: 1px solid gray;
  border-radius: 3px;
  text-align: left;
`;

export const CompleteButton = styled.button`
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

// 셀렉트 박스 Styled Component
export const Select = styled.select`
  margin-bottom: 1rem;
  width: 100%;
  height: 50px;
  text-align: center;
  font-size: 25px;
  color: #006fff;
  border: 1px solid #006fff;
  border-radius: 3px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  background: url('select-arrow.png') no-repeat 95% 50%; /* 화살표 아이콘 추가 */
  }
  select::-ms-expand {
  display: none;

`;

const Option = styled.option``;

// 달력 Styled Component
const StyleDatePicker = styled(DatePicker)`
  margin-bottom: 1rem;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid #006fff;
  border-radius: 3px;
  font-size: 25px;
  color: #006fff;
  cursor: pointer;
  &.main {
    position: relative;
    color: black;
    font-size: 18.5px;
    width: 140px;
    height: 30px;
  }
`;

// 셀렉트박스 지역
export const SelectBoxLocation = (props) => {
  return (
    <Select name={props.name} onChange={props.onChange}>
      <Option value="none">- 선 택 -</Option>
      <Option key="강남" value="강남">
        강남
      </Option>
      <Option key="강북" value="강북">
        강북
      </Option>
      <Option key="강서" value="강서">
        강서
      </Option>
      <Option key="강동" value="강동">
        강동
      </Option>
    </Select>
  );
};
// 셀렉트박스 직종
export const SelectBoxJob = (props) => {
  return (
    <Select name={props.name} onChange={props.onChange}>
      <Option value="none">- 선 택 -</Option>
      <Option key="카페" value="카페">
        카페
      </Option>
      <Option key="편의점" value="편의점">
        편의점
      </Option>
      <Option key="일반식당" value="일반식당">
        일반식당
      </Option>
      <Option key="마트" value="마트">
        마트
      </Option>
      <Option key="패스트푸드점" value="패스트푸드점">
        패스트푸드점
      </Option>
      <Option key="운전" value="운전">
        운전
      </Option>
      <Option key="전단지" value="전단지">
        전단지
      </Option>
      <Option key="주유소" value="주유소">
        주유소
      </Option>
    </Select>
  );
};
// 셀렉트박스 시급
export const SelectBoxPay = (props) => {
  return (
    <Select name={props.name} onChange={props.onChange}>
      <Option value="none">- 선 택 -</Option>
      <Option key="9,160원(최저시급) 이상" value="9,160원(최저시급) 이상">
        9,160원(최저시급) 이상
      </Option>
      <Option key="10,000원 이상" value="10,000원 이상">
        10,000원 이상
      </Option>
      <Option key="12,000원 이상" value="12,000원 이상">
        12,000원 이상
      </Option>
      <Option key="15,000원 이상" value="15,000원 이상">
        15,000원 이상
      </Option>
      <Option key="20,000원 이상" value="20,000원 이상">
        20,000원 이상
      </Option>
    </Select>
  );
};

// 달력에서 날짜선택
export const Calenda = (props) => {
  const [startDate, setStartDate] = useState('');

  return (
    <StyleDatePicker
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        props.onChange(date);
      }}
      placeholderText="- 선 택 -"
      locale={ko}
    />
  );
};

export const CalendaMain = (props) => {
  const [startDate, setStartDate] = useState('');

  return (
    <StyleDatePicker
      className="main"
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        props.onChange(date);
      }}
      timeFormat="HH:mm"
      timeCaption="time"
      placeholderText="- 선 택 -"
      locale={ko}
    />
  );
};
