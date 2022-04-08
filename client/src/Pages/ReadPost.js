import axios from "axios";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import Header from "../Components/Header";
import {
  WrapperDiv,
  Head,
  Body,
  SectorWrapper,
  TitleDiv,
  RTitleInput,
  IndexDiv,
  RContentTextarea,
  CompleteButton,
} from "../Components/CreatePostComponents";
import {
  RModal,
  FixButton,
  IdDiv,
  DeleteButton,
  ButtonDiv,
  TitleWrapper,
} from "../Components/ReadPostComponents";
import { Modal } from "../Components/Modal";

export const ReadPost = (props) => {
  const navigate = useNavigate();

  // 지원하기 버튼 누르면 지원자 정보 post요청
  const applyButton = () => {
    console.log("지원하기 버튼 클릭");

    axios({
      url: `${process.env.REACT_APP_API_URL}/applicants`,
      method: "post",
      data: {
        boards_id: props.currentPost.id,
      },
      withCredentials: true,
    })
      .then(() => {
        alert("지원을 완료하셨습니다.");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  // 게시물 수정페이지로 이동
  const fixPostButton = () => {
    console.log("수정 버튼 클릭");

    navigate("/editpost");
  };

  // 게시물 삭제 요청
  const deletePostButton = () => {
    console.log("삭제 버튼 클릭");

    axios({
      url: `${process.env.REACT_APP_API_URL}/boards/${props.currentPost.id}`,
      method: "delete",
      withCredentials: true,
    })
      .then((res) => {
        alert(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header
        hadleLoginVerification={props.hadleLoginVerification}
        isLogin={props.isLogin}
      />
      <WrapperDiv>
        <Body>
          <TitleWrapper>
            <TitleDiv>게시글 보기</TitleDiv>
            <IdDiv float="right">
              작성자 닉네임: {props.currentPost.nickname}
            </IdDiv>
          </TitleWrapper>
          <SectorWrapper>
            <IndexDiv>제목</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.title} />
            <IndexDiv>지역</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.work_place} />
            <IndexDiv>날짜</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.work_date} />
            <IndexDiv>직종</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.occupation} />
            <IndexDiv>시급</IndexDiv>
            <RTitleInput readOnly value={props.currentPost.wage} />
          </SectorWrapper>
          <IndexDiv>내용</IndexDiv>
          <RContentTextarea readOnly value={props.currentPost.content} />
          {/* 로그인 상태인 경우(내가 작성한 글인지 여부), 로그아웃 상태인 경우 3가지 경우 */}
          {props.isLogin === true ? (
            <>
              {(props.userInfo.nickname ===
                String(props.currentPost.nickname)) ===
              true ? (
                <ButtonDiv>
                  <FixButton onClick={fixPostButton}>수정</FixButton>
                  <DeleteButton onClick={deletePostButton}>삭제</DeleteButton>
                </ButtonDiv>
              ) : (
                <CompleteButton onClick={applyButton}>
                  지 원 하 기
                </CompleteButton>
              )}
            </>
          ) : (
            <Modal
              hadleLoginVerification={props.hadleLoginVerification}
              isLogin={props.isLogin}
            />
          )}
        </Body>
      </WrapperDiv>
    </>
  );
};

export default ReadPost;
