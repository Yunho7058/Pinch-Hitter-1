import styled from 'styled-components';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: white; */
  width: 100%;
  height: 150vh;
  /* border: solid 1px red; */
  background-color: #f9fafb;
  /* @media screen and (max-width: 1080px) {
    width: 100%;
    height: 100%;
  } */
`;

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 768px;
  height: 100%;
  /* border: solid 1px black; */
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 98%;
  height: 4%;
  margin: 1% 0;
  margin-top: 2%;
  text-align: center;
  color: black;
  font-size: 1.5rem;
  background-color: white;
  box-shadow: 5px 5px 10px 0 rgba(72, 75, 108, 0.08);
  border: solid 1px rgb(227, 233, 237);
  border-radius: 20px;
`;

export const TopIndexDiv = styled.div`
  width: 100%;
  height: 40px;
  /* border: solid 1px black; */
  border-radius: 20px;
`;

export const MyBoardsOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 98%;
  height: 35%;
  margin: 1% 0;
  background-color: white;
  box-shadow: 5px 5px 10px 0 rgba(72, 75, 108, 0.08);
  border: solid 1px rgb(227, 233, 237);
  border-radius: 20px 20px 0 0;
`;

export const MyBoardsTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  height: 15%;
  /* border: solid 1px black; */
`;

export const MyBoardTitleTextDiv = styled.div`
  width: 140px;
  height: 40px;
  margin-left: 1rem;
  text-align: center;
  line-height: 40px;
  font-size: 1.2rem;
  border: solid 1px rgb(227, 233, 237);
  box-shadow: 1px 1px 10px 0 rgba(72, 75, 108, 0.08);
  border-radius: 20px;
`;

export const MyBoardsIndexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5%;
  text-align: center;
  font-size: 0.8rem;
  font-weight: bold;
  border-bottom: solid 1px rgb(227, 233, 237);
  box-shadow: 0 1px 10px 0 rgba(72, 75, 108, 0.08);
`;

export const MyBoardsIndexFirstDiv = styled.div`
  width: 50%;
  height: 100%;
  /* border: solid 1px black; */
`;

export const MyBoardsIndexSecondDiv = styled.div`
  width: 25%;
  height: 100%;
  /* border: solid 1px black; */
`;

export const MyBoardsIndexThirdDiv = styled.div`
  width: 25%;
  height: 100%;
  /* padding-right: 5px; */
  /* border: solid 1px black; */
`;

export const MyBoardsIndexFourthDiv = styled.div`
  width: 5px;
  height: 100%;
  /* border: solid 1px black; */
`;

export const MyBoardsMainDiv = styled.div`
  /* display: flex;
  flex-direction: column; */
  width: 100%;
  height: 80%;
  /* border: solid 1px black; */
  /* border-radius: 20px; */
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    /* background-color: skyblue; */
    border-radius: 5px;
    margin: 100px;
    z-index: 999;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #3182f6;
  }
`;

export const MyBoardsListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* height: 4rem;
  line-height: 4rem; */
  /* margin-bottom: 0.5rem; */
  border-bottom: solid 1px rgb(227, 233, 237);
  /* border: solid 1px black; */
  &:hover {
    background-color: rgba(0, 27, 55, 0.1);
  }
`;

export const MyApplyListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4rem;
  line-height: 4rem;
  /* margin-bottom: 0.5rem; */
  border-bottom: solid 1px rgb(227, 233, 237);
  /* border: solid 1px black; */
  &:hover {
    background-color: rgba(0, 27, 55, 0.1);
  }
`;

export const MyBoardsListTitleDiv = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
  /* border: solid 1px black; */
`;

export const MyBoardsListApplicantInfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
  /* border: solid 1px black; */
`;

export const MyBoardsListNicknameDiv = styled.div`
  width: 50%;
  height: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  /* border: solid 1px black; */
`;

export const MyBoardsListMobileDiv = styled.div`
  width: 50%;
  height: 1.5rem;
  text-align: center;
  font-size: 0.8rem;
  /* border: solid 1px black; */
`;

export const MyApplyListTitleDiv = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
  /* border: solid 1px black; */
`;

export const MyApplyListWorkplaceDiv = styled.div`
  width: 25%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
  /* border: solid 1px black; */
`;

export const MyApplyListWorkdateDiv = styled.div`
  width: 25%;
  height: 100%;
  text-align: center;
  font-size: 0.8rem;
  /* border: solid 1px black; */
`;

export const MyInformationOuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 98%;
  height: 25%;
  text-align: center;
  font-size: 1.2rem;
  margin: 1% 0;
  margin-bottom: 2%;
  box-shadow: 5px 5px 10px 0 rgba(72, 75, 108, 0.08);
  border: solid 1px rgb(227, 233, 237);
  border-radius: 20px;
  background-color: white;
`;

export const MyInformationTopDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  height: 24%;
  /* border: solid 1px black; */
  /* border-radius: 20px; */
`;

export const MyInformationTopTextDiv = styled.div`
  width: 110px;
  height: 40px;
  margin-left: 1rem;
  text-align: center;
  line-height: 40px;
  font-size: 1.2rem;
  border: solid 1px rgb(227, 233, 237);
  box-shadow: 1px 1px 10px 0 rgba(72, 75, 108, 0.08);
  border-radius: 20px;
`;

export const MyInformationListDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10%;
  margin-top: 1%;
  /* border: solid 1px black; */
`;

export const MyInformationIndexDiv = styled.div`
  width: 25%;
  height: 100%;
  text-align: right;
  /* border: solid 1px black; */
`;

export const MyInformationInput = styled.input`
  width: 61%;
  height: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  border: 0;
`;

export const EditInput = styled.input`
  width: 61%;
  height: 100%;
  color: #4593fc;
  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  background-color: #f2f4f6;
  border: solid 2px #90c2ff;
`;

export const MyInformationSideDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 100%;
  /* border: solid 1px black; */
`;

export const MyInformationBottomDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
  margin-top: 8px;
  /* border: solid 1px black; */
`;

export const MyinformationBottomUpDiv = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: solid 1px black; */
`;

export const MyinformationBottomDownDiv = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: solid 1px black; */
`;

export const MyinformEditButton = styled.button`
  width: 80px;
  height: 100%;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(49, 130, 246);
  color: white;
  &:hover {
    transition: transform 1s;
    filter: brightness(90%);
  }
`;

export const MyinformEditCompleteButton = styled.button`
  width: 80px;
  height: 100%;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(49, 130, 246);
  color: white;
  &:hover {
    transition: transform 1s;
    filter: brightness(90%);
  }
`;

export const PasswordChangeButton = styled.button`
  width: 100%;
  height: 30px;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  background-color: rgb(49, 130, 246);
  color: white;
  &:hover {
    transition: transform 1s;
    filter: brightness(90%);
  }
`;
export const WithdrawalButton = styled.button`
  width: 100%;
  height: 30px;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  background-color: #f44336;
  color: white;
  &:hover {
    transition: transform 1s;
    filter: brightness(90%);
  }
`;

export const ModalBackdrop = styled.div`
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

export const ModalView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 35%;
  border-radius: 10px;
  background-color: white;
`;

export const ModalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 20%;
  font-size: 1rem;
  text-align: center;
`;

export const ModalSmallDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 10%;
  font-size: 1rem;
  text-align: center;
`;

export const ModalIndexDiv = styled.div`
  width: 80%;
  height: 100%;
  font-size: 1rem;
  font-weight: bold;
  padding-top: 0.4rem;
  text-align: center;
`;

export const ModalInput = styled.input`
  width: 80%;
  height: 100%;
  font-size: 1rem;
  padding: 0.3rem;
  text-align: center;
  border: solid 1px #90c2ff;
`;

export const ModalMsgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
  font-size: 12px;
  text-align: center;
  color: #90c2ff;
  &.green {
    color: green;
  }
  &.red {
    color: red;
  }
`;

export const ModalButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 20%;
`;

export const CancelModalButton = styled.button`
  width: 15%;
  height: 100%;
  margin-right: 60%;
  color: #90c2ff;
  background-color: #e8f3ff;
  border: #90c2ff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const CompleteModalButton = styled.button`
  width: 15%;
  height: 100%;
  color: #ef9a9a;
  background-color: #ffebee;
  border: #ef9a9a;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const AlertModalView = styled.div`
  width: 300px;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background-color: white;
`;

export const AlertModalDiv = styled.div`
  width: 100%;
  height: 60%;
  font-size: 1rem;
  padding-top: 1.5rem;
  text-align: center;
`;

export const AlertModalButton = styled.button`
  width: 15%;
  height: 30%;
  color: #90c2ff;
  background-color: #e8f3ff;
  border: #90c2ff;
  border-radius: 10px;
  text-align: center;
  margin-left: 80%;
  margin-bottom: 3%;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const AlertModalButtonBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 35%;
`;

export const CancelAlertModalButton = styled.button`
  width: 15%;
  height: 80%;
  margin-right: 60%;
  color: #90c2ff;
  background-color: #e8f3ff;
  border: #90c2ff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

export const DeleteAlertModalButton = styled.button`
  width: 15%;
  height: 80%;
  color: #ef9a9a;
  background-color: #ffebee;
  border: #ef9a9a;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
