import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";
import {
  SelectBoxLocation,
  SelectBoxJob,
  SelectBoxPay,
  Calenda,
  WrapperDiv,
  Body,
  SectorWrapper,
  TitleDiv,
  TitleInput,
  IndexDiv,
  ContentTextarea,
  CompleteButton,
} from "../Components/CreatePostComponents";
import Header from "../Components/Header";

export const EidtPost = (props) => {
  const navigate = useNavigate();

  const [inputTitle, setInputTitle] = useState("");
  const [selectLocation, setSelectLocation] = useState("");
  const [pickerDate, setPickerDate] = useState("");
  const [selectJob, setSelectJob] = useState("");
  const [selectPay, setSelectPay] = useState("");
  const [textareaContent, setTextareaContent] = useState("");

  // 기존 게시물 내용이 수정 페이지에서 보일 수 있게
  // 셀렉트 박스랑 달력은 구현이 안됨!!(공부필요)
  useEffect(() => {
    setInputTitle(props.currentPost.title);
    setSelectLocation(props.currentPost.work_place);
    setPickerDate(props.currentPost.work_date);
    setSelectJob(props.currentPost.occupation);
    setSelectPay(props.currentPost.selectPay);
    setTextareaContent(props.currentPost.content);
  }, []);

  // 입력되는 제목, 지역, 날짜, 직종, 급여, 내용
  const handleInputValue = (e) => {
    setInputTitle(e.target.value);
  };

  const handleSelectValue = (e) => {
    if (e.target.name === "location") {
      setSelectLocation(e.target.value);
    } else if (e.target.name === "job") {
      setSelectJob(e.target.value);
    } else if (e.target.name === "pay") {
      setSelectPay(e.target.value);
    }
  };

  const handlePikerValue = (date) => {
    setPickerDate(date);
  };

  const handleTextareaValue = (e) => {
    setTextareaContent(e.target.value);
  };

  // 수정 완료 버튼
  // 수정한 게시물 정보 -> 서버로
  const postCompleteButton = () => {
    console.log("수정완료 버튼 클릭");

    if (inputTitle.length > 0 && textareaContent.length > 0) {
      axios({
        url: `${process.env.REACT_APP_API_URL}/boards`,
        method: "patch",
        data: {
          id: props.currentPost.id,
          title: inputTitle,
          occupation: selectJob,
          wage: selectPay,
          work_date: pickerDate,
          work_place: selectLocation,
          content: textareaContent,
        },
        withCredentials: true,
      })
        .then(() => {
          alert("수정을 완료하셨습니다.");
          navigate("/");
        })
        .catch((err) => console.log(err));
    } else {
      alert("제목과 내용을 모두 입력해주세요.");
    }
  };

  return (
    <>
      <Header
        hadleLoginVerification={props.hadleLoginVerification}
        isLogin={props.isLogin}
      />
      <WrapperDiv>
        <Body>
          <TitleDiv>게시글 수정</TitleDiv>
          <SectorWrapper>
            <IndexDiv>제목</IndexDiv>
            <TitleInput
              value={inputTitle}
              type="text"
              name="title"
              onChange={handleInputValue}
            />
            <IndexDiv>지역</IndexDiv>
            <SelectBoxLocation
              key={selectLocation}
              name="location"
              onChange={handleSelectValue}
            />
            <IndexDiv>날짜</IndexDiv>
            <Calenda
              value={pickerDate}
              name="date"
              onChange={handlePikerValue}
            />
            <IndexDiv>직종</IndexDiv>
            <SelectBoxJob
              value={selectJob}
              name="job"
              onChange={handleSelectValue}
            />
            <IndexDiv>시급</IndexDiv>
            <SelectBoxPay
              value={selectPay}
              name="pay"
              onChange={handleSelectValue}
            />
          </SectorWrapper>
          <IndexDiv>내용</IndexDiv>
          <ContentTextarea
            value={textareaContent}
            type="text"
            name="content"
            onChange={handleTextareaValue}
          />
          <CompleteButton onClick={postCompleteButton}>
            수 정 완 료
          </CompleteButton>
        </Body>
      </WrapperDiv>
    </>
  );
};

export default EidtPost;
