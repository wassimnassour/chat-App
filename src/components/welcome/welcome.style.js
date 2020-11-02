import styled from "styled-components";
import chat from "../../assets/chatting.jpg";

export const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 48%;
  height: 100%;
  margin-right: 1rem;
  background-image: linear-gradient(to bottom, #0068add6, #032942d9),
    url(${chat});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  h2 {
    color: white;
    letter-spacing: 3px;
    font-weight: bold;
    font-size: 35px;
  }
  span {
    margin-top: 6px;
    color: white;
    font-size: 18px;
    width: 80%;
    text-align: center;
    letter-spacing: 1px;
    line-height: 29px;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;
